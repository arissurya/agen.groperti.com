import { Box, Grid } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import logo from '../../../assets/img/logo.png'
import tiktok from '../../../assets/img/tiktok.png'

function Footer() {

    return (
        <div className="footer-container">
            <div className="container-content">
                <Grid container >
                    <Grid item xl={8} lg={8} md={8} sm={12} xs={12}>
                        <div className="left-content">
                            <div className='logo-groperti-footer'>
                                <a href="/">
                                    <img src={logo} alt="logo" />
                                </a>
                            </div>
                            <p> Properti adalah awal kehidupan maka kita merancang GroPerti untuk mempermudah kehidupan pemiliknya. </p> 
                            <p> Dengan cara membangun marketplace properti dengan fokus underprice yang paling lengkap, mudah digunakan dan paling terpercaya di dunia mulai dari Indonesia.</p>
                            <div className="socmed-content">
                            <ul>
                                <li>
                                    <a href="https://web.facebook.com/GroPerti" target="_blank" rel="noreferrer">
                                    <FacebookIcon className="icon"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/groperti_" target="_blank" rel="noreferrer">
                                    <TwitterIcon className="icon"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.tiktok.com/@groperti_" target="_blank" rel="noreferrer">
                                    <img className='img-tiktok' src={tiktok} alt="tiktok" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/channel/UC-7RtvCTzdUmHl5NMneQL3g" target="_blank" rel="noreferrer">
                                    <YouTubeIcon className="icon"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                                    <LinkedInIcon className="icon"/>
                                    </a>
                                </li>
                                
                            </ul>
                        </div>
                        </div>
                    </Grid>

                    <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
                        <Grid container>
                            <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                                <div className="right-content-one">
                                    <h6>Perusahaan</h6>
                                    <a href="https:/groperti.com/about-us"><p>Tentang Kami</p></a>
                                    <a href="mailto: hai.groperti@gmail.com" ><p>Kontak Kami</p></a>
                                    <a href="https://blog.groperti.com/"><p>Blog</p></a>
                                </div>
                            </Grid>
                            <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                                <div className="right-content-two">
                                    <h6>Temukan</h6>
                                    <a href="https:/groperti.com/faq"><p>Pusat Bantuan</p></a>
                                    <a href="https:/groperti.com//privacy-policy"><p>Kebijakan Privasi</p></a>
                                    <a href="https:/groperti.com//terms-of-use"><p>Kententuan Layanan</p></a>
                                </div>
                            </Grid>
                            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                                <Box pt={2}>
                                <div className="right-office-two">
                                    <h6>Alamat Kantor </h6>
                                    <p>Gedung Graha Krama Yudha Lantai 4 Unit B </p>
                                    <p>Jl. Warung Jati Barat No. 43 Kel. Duren Tiga Kec. Pancoran Jakarta Selatan 12760</p>
                                    <p>Telepon : 021-7945301</p>
                                </div>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>


                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div className="copyright">
                            <span>© {new Date().getFullYear()}. Groperti </span>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer
