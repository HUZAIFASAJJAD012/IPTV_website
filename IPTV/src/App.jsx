
import './App.css'
import FAQSection from './component/FAQSection'
import FeatureCards from './component/FeatureCards'
import Footer from './component/Footer'
import Header from './component/Header'
import HeroSection from './component/HeroSection'
import PremiumFeaturesSection from './component/PremiumFeaturesSection'
import PricingPage from './component/PricingPage'
import PromoBanner from './component/PromoBanner'
import SubscriptionSection from './component/SubscriptionSection'

function App() {

  return (
    <>
     <Header/>
     <HeroSection/>
     <PricingPage/>
     <FeatureCards/>
     <SubscriptionSection/>
     <PremiumFeaturesSection/>
     <FAQSection/>
     <PromoBanner/>
     <Footer/>
    </>
  )
}

export default App
