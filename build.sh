

# /bin/bash

# if any return not equal to true, process will quit.
# refer to https://www.zhizhesoft.com/unix-linux-jiao-ben-zhong-set-e-de-zuo-yong/
set -e

# refer to https://blog.csdn.net/qq_20417499/article/details/103308076
# this script's parent directory
cd $(dirname $0)
parentDir=$(pwd)

cd dist
echo "setup files ..."
cp ${parentDir}/src/info.plist ./ 
cp ${parentDir}/src/icon.png ./ 
cp ${parentDir}/README.md ./ 
cp ${parentDir}/LICENSE ./ 

rm ./index.mjs

# insert the vesion to .plist file, if you need
echo "Updating version ..."
curVersion=$(node -e "console.log(require('${parentDir}/package.json').version)")
sed -i '' 's/{{version}}/'${curVersion}'/' ./info.plist

# insert the readme content in src dir to .plist file, if you need
echo "Injecting readme ..."
readme="${parentDir}/src/README.md"
sed -i '' -e "/{{readme}}/{r ${readme}" -e 'd' -e '}' ./info.plist

# insert the auto-update to .plist file, if you need, and you need to fill in the workflow info in that file
echo "Injecting auto-update script ..."
update="$(mktemp)"
# s/&/\&amp;/g; s/</\&lt;/g; s/>/\&gt;/g this pattern is use for repalcing '&' '<' '>'
cat ${parentDir}/src/update.sh | sed 's/&/\&amp;/g; s/</\&lt;/g; s/>/\&gt;/g' > ${update}
sed -i '' -e "/{{update_script}}/{r ${update}" -e 'd' -e '}' ./info.plist
 
echo "Bundling workflow ..."
name=$(node -e "console.log(require('${parentDir}/package.json').name)")
zip -Z deflate -rq9 ${parentDir}/dist/${name}.alfredworkflow * -x etc