import { Inter } from '@next/font/google';
import Head from 'next/head';
import Layout from '../components/layout';
import styles from '../styles/Home.module.css';


export default function Home() {
  return (
    <div>
      <Layout> </Layout>
      <Header /> 
      <Footer />
    </div>
      

    
  );
}