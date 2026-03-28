import { allureReporting } from '../Pages/ObjectRepository.cy';
import { openaccountPageFunctionalities } from '../Pages/openaccountPage.cy';
import { UserRegistrationData } from '../utilities/randomDataGenerator';
import { accountoverviewPageFunctionalities } from '../Pages/accountoverviewPage.cy';

const allu = new allureReporting();
const openAccountPage = new openaccountPageFunctionalities();
const accountoverviewPage = new accountoverviewPageFunctionalities();

describe('Account Overview Page', () => {
    let userCredentials: UserRegistrationData;

    beforeEach(() => {
        userCredentials = openAccountPage.registerAndLogin();
    });

    it('Check Account Details', () => {
        allu.sendValues("Create new account, click on account link, verify account number and account type", "Accounts Overview", "Critical", "ParaBank", "Account Overview Page", "Accounts Overview");
        accountoverviewPage.verifyAccountDetails(0);
    });
});
