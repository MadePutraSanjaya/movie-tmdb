"use client";
import React from 'react'
import { Layout } from 'antd';
import Navbar from '../atoms/navbar/Navbar';
const { Content } = Layout;

const Home = ({
  children
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <Layout className='min-h-screen'>
      <Navbar />
      <Content className='pt-0 px-[48px] mt-[24px] mb-[40px]'>
        {children}
      </Content>
    </Layout>
  )
}

export default Home