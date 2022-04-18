import React from 'react'

export const Banner1 = (x) => {
    return (
        <div data-aos="fade-up"
        data-aos-duration="3000" id='banner1'>
            <h2>{x.title}</h2>
        </div>
    )
}

export const Banner2 = () => {
    return (
        <div data-aos="fade-down" id='banner2'></div>
    )
}

export const BannerHelmets = () =>{
    return (
        <div id="bannerHelmets"></div>
    )
}

export const BannerGloves = () =>{
    return (
        <div id="bannerGloves"></div>
    )
}