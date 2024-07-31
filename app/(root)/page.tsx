import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';

const Home = () => {
  const loggedIn = { 
    firstName: "User", 
    lastName: "Example",
    email: "user.example@email.com",
  };

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-content'>
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access ang manage your account and transactions efficiently."
          />
          <TotalBalanceBox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>

        RECENT TRANSACTIONS
      </div>

      <RightSidebar 
        user={loggedIn}
        transations={[]}
        banks={[{ currentBalance: 123.50 },{ currentBalance: 123.50 }]}
      />
    </section>
  )
}

export default Home