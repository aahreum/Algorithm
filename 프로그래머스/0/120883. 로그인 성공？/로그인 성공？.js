function solution(id_pw, db) {
    for (let i = 0; i < db.length; i++) {
        const [dbId, dbPw] = db[i];
        const [id, pw] = id_pw;
        
        if (dbId === id && dbPw === pw) {
            return 'login';
        } else if (dbId === id) {
            return 'wrong pw';
        }
    }
    
    return 'fail';
}