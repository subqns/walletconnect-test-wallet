import starkwareLogo from "./assets/starkware-logo.svg";

import supportedChains from "./helpers/chains";
import { ROPSTEN_CHAIN_ID } from "./helpers/constants";
import { starkRegistryMap } from "./helpers/starkware";
import { convertNumberToString } from "./helpers/bignumber";

const STARKWARE_SUPPORTED_CHAIN_IDS = Object.keys(starkRegistryMap);

export default {
  name: "StarkWare",
  logo: starkwareLogo,
  chainId: ROPSTEN_CHAIN_ID,
  colors: {
    defaultColor: "40, 40, 110",
    backgroundColor: "25, 24, 46",
  },
  chains: supportedChains.filter(x =>
    STARKWARE_SUPPORTED_CHAIN_IDS.includes(convertNumberToString(x.chain_id)),
  ),
  styleOpts: {
    showPasteUri: false,
    showVersion: false,
  },
};
