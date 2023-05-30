// agregação:
class Friend {
    private nickname: string;

    constructor() {
        this.nickname = '';
    }
  
    public getNickname(): string {
      return this.nickname;
    }
  
    public setNickname(nickname: string) {
      this.nickname = nickname;
    }
  }
  
  class SocialMediaAccount1 {
    private friends = new Array<Friend>();
  
    public addFriend(friend: Friend) {
      this.friends.push(friend);
    }
  
    public printFriends() {
      this.friends.map((friend) => console.log(friend));
    }
  }
  
  const socialMediaAccount1 = new SocialMediaAccount1();
  
  const friendCarol = new Friend();
  friendCarol.setNickname('Carol');
  
  const friendFernando = new Friend();
  friendFernando.setNickname('Fernando');
  
  socialMediaAccount1.addFriend(friendCarol);
  socialMediaAccount1.addFriend(friendFernando);
  socialMediaAccount1.printFriends();