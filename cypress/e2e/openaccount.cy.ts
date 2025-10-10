import { allureReporting } from '../pages/objectRepository.cy';
import { openaccountPageFunctionalities } from '../pages/openaccountPage.cy';
import { UserRegistrationData } from '../utilities/randomDataGenerator';

const allu = new allureReporting();
const openAccountPage = new openaccountPageFunctionalities();

describe('Open Account Page', () => {
    let userCredentials: UserRegistrationData;

    beforeEach(() => {
        userCredentials = openAccountPage.registerAndLogin();
    });

    it('Create Checking Account', () => {
        allu.sendValues("Choose 'Checking' from the dropdown list and click on 'Open New Account', and verify in Accounts Overview", "Open New Account", "Critical", "ParaBank", "Open Account Page", "Open New Account");
        openAccountPage.createCheckingAccount(0);
    });

    it.only('Create Savings Account', () => {
        allu.sendValues("Choose 'Savings' from the dropdown list and click on 'Open New Account', and verify in Accounts Overview", "Open New Account", "Critical", "ParaBank", "Open Account Page", "Open New Account");
        openAccountPage.createSavingsAccount(0);
    });
    
});