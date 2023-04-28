import React from 'react'
import { Routes, Switch, Route, Link } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'

import { Navbar, Homepage, Cryptocurrencies, CryptoDetails, News } from './components'
import './App.css'

const App = () => {
    return (
        <div className='app'>
            <div className='navbar'>
                <Navbar />
            </div>
            <div className='main'>
                <Layout>
                    <div className='routes'>
                        <Routes>
                            <Route exact path='/' element={<Homepage />} />
                        </Routes>
                        <Routes>
                            <Route exact path='/cryptocurrencies' element={<Cryptocurrencies />} />
                        </Routes>
                        <Routes>
                            <Route exact path='/crypto/:coinId' element={<CryptoDetails />} />
                        </Routes>
                        <Routes>
                            <Route exact path='/news' element={<News />} />
                        </Routes>
                    </div>
                </Layout>
                <div className='footer' level={5} style={{ color: 'white', textAlign: 'center' }} >
                    <Typography.Title style={{ color: 'white', textAlign: 'center', fontSize: '20px' }} >
                        Cryptoverse <br />
                        All rigths reserverd
                    </Typography.Title>
                    <Space>
                        <Link to='/'>Home</Link>
                        <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
                        <Link to='/news'>News</Link>
                    </Space>
                </div>
            </div>
        </div>
    )
}

export default App