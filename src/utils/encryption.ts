import { client } from "./backend-api";
import { createVault } from "./vault-factory";
import { DeviceSecurityType, VaultType } from "@ionic-enterprise/identity-vault";

const vault = createVault({
    key: 'io.ionic.csdemosecurestoragekeys',
    type: VaultType.SecureStorage,
    deviceSecurityType: DeviceSecurityType.None,
    unlockVaultOnLoad: false,
})

const databaseKey = 'database-key';

const getKeyFromBackendAPI = async (): Promise<string | undefined> => {
    const res = await client.get('/keys');
    return res.data && res.data.storage;
}

const getDatabaseKey = async (): Promise<string | void> => {
    let key = await vault.getValue(databaseKey);
    
    if (!key) {
        key = await getKeyFromBackendAPI();
        vault.setValue(databaseKey, key)
    }

    return key;
}

export { getDatabaseKey }