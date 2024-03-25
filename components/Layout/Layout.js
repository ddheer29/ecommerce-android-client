import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
    return (
        <>
            <StatusBar />
            <Header />
            <View>{children}</View>
            <Footer />
        </>
    )
}

export default Layout

const styles = StyleSheet.create({})