import * as dotenv from 'dotenv'

export default () => {
    const path = require('path');
    dotenv.config({ path: path.resolve(process.cwd(), process.env.ENV) });
}