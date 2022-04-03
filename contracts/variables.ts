// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
import { z } from 'zod';

const alchemyEthRinkebySchema = z.string();
export const alchemyEthRinkeby = alchemyEthRinkebySchema.parse(process.env.ALCHEMY_ETH_RINKEBY);

const alchemyEthMainnetSchema = z.string();
export const alchemyEthMainnet = alchemyEthMainnetSchema.parse(process.env.ALCHEMY_ETH_MAINNET);

const coinMarketCapApiSchema = z.string();
export const coinMarketCapApi = coinMarketCapApiSchema.parse(process.env.COINMARKETCAP_API);

const devPrivateKeySchema = z.string();
export const devPrivateKey = `${devPrivateKeySchema.parse(process.env.DEV_PRIVATE_KEY)}`;
