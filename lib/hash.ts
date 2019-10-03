import crypto, { BinaryLike, HexBase64Latin1Encoding } from 'crypto';
import { fs } from 'mz';

export function sha1(data: BinaryLike, digest: HexBase64Latin1Encoding) {
  var hash = crypto.createHash('sha1');
  hash.update(data);
  if (!digest) {
    digest = 'hex';
  }

  return hash.digest(digest);
}

export function md5(data: BinaryLike, digest: HexBase64Latin1Encoding) {
  var hash = crypto.createHash('md5');
  hash.update(data);
  if (!digest) {
    digest = 'hex';
  }

  return hash.digest(digest);
}

export async function md5File(path: string) {
  const getMd5 = (path: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      try {
        //从文件创建一个可读流
        // const stat = await fs.stat(path);
  
        const stream = fs.createReadStream(path);
        
        // const fsHash = _crypto.createHash('md5');
        const fsHash = crypto.createHash('md5');
  
        stream.on('data', function(d) {
            fsHash.update(d);
        });
  
        stream.on('end', function() {
            const md5 = fsHash.digest('hex');
            resolve(md5);
        });
      } catch (e) {
        reject(e);
      }
    });
  }; 
  
  const stat = await fs.stat(path);

  if (!stat.isFile()) {
    throw new Error('Not found this file');
  }

  return getMd5(path);
}

// export default crypto;