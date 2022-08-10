// ["asdf", "970707", "male", "asdf@gmail.com"]

const DID = artifacts.require('DID');

contract('DID', ([deployer]) => {
  let did;

  describe('DID deployment', () => {
    it('deployed', async () => {
      did = await DID.deployed();

      console.log('DID CA : ', did.address);
    });

    it('register user', async () => {
      const userData = {
        name: 'jw',
        birth: '000000',
        gender: 'male',
        email: 'jw@gmail.com',
      };

      const beforeRegister = await did.isRegistered('jwjw');
      console.log('user ? : ', beforeRegister);

      const {receipt} = await did.registerUser('jwjw', userData);
      console.log(receipt.status);

      const afterRegister = await did.isRegistered('jwjw');
      console.log('user ? : ', afterRegister);

      const userInfo = await did.getUserInfo('jwjw', {
        from: deployer,
      });
      const {name, birth, gender, email} = userInfo;
      console.log(`
        UserInfo
        name : ${name}
        birth : ${birth}
        gender : ${gender}
        email : ${email}
      `);

      await did.withdrawUser('jwjw');

      const afterWithdrawal = await did.getUserInfo('jwjw', {
        from: deployer,
      });
      console.log(afterWithdrawal);

      const isRegistered = await did.isRegistered('jwjw');
      console.log(isRegistered);
    });

    it('update user', async () => {
      const userData = {
        name: 'jw',
        birth: '999999',
        gender: 'male',
        email: 'asdf@gmail.com',
      };

      await did.registerUser('asdf', userData);

      const beforeUpdate = await did.getUserInfo('asdf', {
        from: deployer,
      });

      console.log(beforeUpdate);

      const updateData = {
        name: 'jjw',
        birth: '991230',
        gender: 'male',
        email: 'aaaa@gmail.com',
      };

      await did.updateUser('asdf', updateData);

      const afterUpdate = await did.getUserInfo('asdf', {
        from: deployer,
      });

      console.log(afterUpdate);
    });
  });
});
