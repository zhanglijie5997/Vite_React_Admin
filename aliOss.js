const aliOss = require('ali-oss');
const path = require('path');
const fs = require('fs');
const isDev = process.env.npm_lifecycle_event.split(':')[1] === 'uat';
// 上传文件夹
const prefix = isDev ? 'xsl' : 'app_h5';
const client = new aliOss({
    region: '华南1(深圳)',
    accessKeyId: '',
    accessKeySecret: '',
    endpoint: '',
    bucket: isDev ? 'heybooks-test-uat' : 'heybooks-www',
});
/** 上传打包文件到oss服务器
 * @param {string} dirs 本地基础路径, 如 C:\Users\EDZ\Desktop\速百读后台管理\CMS\dist
 */
async function putAliOssPath(dirs) {
    //  上传文件
    const _list = await client.list({
        'prefix': prefix
    });
    const deleteList = _list.objects.reduce((pre, cur) => {
        return [...pre, cur.name];
    }, [])
    await client.deleteMulti(deleteList)
    console.log('success：  删除成功');
    const allPath = (dir) =>  fs.readdir(dir, (err, file) => {
        if(err) return ;
         file.map( async _ => {
            //  本地路径
            let localDir = dir + _;
            try {
                await client.put(`/${prefix}/` + localDir.split(dirs)[1], localDir);
                console.log(`success:   文件${localDir}上传成功🎉---`);
                console.log('success:   ',`/${prefix}` + localDir.split(dirs)[1], '路径');
            } catch (error) {
                console.error(error, `文件${localDir}上传失败`)
            }
            if(!_.includes('.')) {
                allPath(localDir + '/')
            }
        });
    });
    allPath(dirs);
}
function push() {
    const putPath = path.join(__dirname, './dist/');
    putAliOssPath(putPath);
}
push();
