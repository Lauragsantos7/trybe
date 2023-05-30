import  jwt  from "jsonwebtoken";


type AppJwtPayload = {
    username: string
}; // & jwtpayload pra pegar as outras propriedades retornadas pelo token(data expiração, etc)

const sign = (payload: AppJwtPayload): string => {

    const token = jwt.sign(payload, 'secret')
    return token
};

const verify = (token:string): AppJwtPayload => {
    const decoded = jwt.verify(token, 'secret');
    return decoded as AppJwtPayload;
};

export default {
    sign,
    verify,
}