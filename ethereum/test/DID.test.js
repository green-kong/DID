// ["asdf", "970707", "male", "asdf@gmail.com"]

const DID = artifacts.require("DID");

contract("DID", ([deployer]) => {
  let did;

  describe("DID deployment", () => {
    it("deployed", async () => {
      did = await DID.deployed();

      console.log("DID CA : ", did.address);
    });

    it("register user", async () => {
      const userData = {
        userCode: "1234",
        name: "jw",
        birth: "000000",
        gender: "male",
        email: "jw@gmail.com",
      };

      const beforeRegister = await did.isRegistered("jwjw");
      console.log("user ? : ", beforeRegister);

      const { receipt } = await did.registerUser("jwjw", userData);
      console.log(receipt.status);

      const afterRegister = await did.isRegistered("jwjw");
      console.log("user ? : ", afterRegister);

      const userInfo = await did.getUserInfo("jwjw", {
        from: deployer,
      });

      const { userCode, name, birth, gender, email } = userInfo;
      console.log(`
        < UserInfo >
        userCode : ${userCode}
        name : ${name}
        birth : ${birth}
        gender : ${gender}
        email : ${email}
      `);

      await did.withdrawUser("jwjw");

      const isRegistered = await did.isRegistered("jwjw");
      console.log(isRegistered);

      //   const afterWithdrawal = await did.getUserInfo("jwjw", {
      //     from: deployer,
      //   });
      //   console.log(afterWithdrawal);

      const byNotOwner = await did.getUserInfo("jwjw", {
        from: "0xBEfE62977E0eE8827E56f65323341FC7F81240A2",
      });
      console.log("can??", byNotOwner);
    });
  });
});
