import Layout from '@/components/Layout';
import Footer from '../components/Footer';
import Header from '../components/Header';



const components = () => {
    return (
        <div>

        <div className='my-8'>
        <Layout>Layout:</Layout>
        
            
        </div>

        <div className='my-8'>
            <h1>Header:</h1>
            <Header />
        </div>

        <div className='my-8'>
            <h1>Footer:</h1>
            <Footer />
        </div>

         </div>
    )
  }
  
  export default components