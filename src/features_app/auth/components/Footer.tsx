import { Grid } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {

    return (
        <div className="footer-container">
            <div className="container-content">
                <Grid container >
                    <Grid item xl={8} lg={8} md={8} sm={12} xs={12}>
                        <div className="left-content">
                            <div>
                                <h1>Groperti.com</h1>
                                {/* <a href="/"><img src={data.data.footer.logo} alt='logo' /></a> */}
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
                    <Grid item xl={2} lg={2} md={2} sm={6} xs={6}>
                        <div className="right-content-one">
                            <h6>Perusahaan</h6>
                            <a href="/about-us"><p>Tentang Kami</p></a>
                            <a href="mailto: hai.groperti@gmail.com" ><p>Kontak Kami</p></a>
                            <a href="https://blog.groperti.com/"><p>Blog</p></a>
                        </div>
                    </Grid>
                    <Grid item xl={2} lg={2} md={2} sm={6} xs={6}>
                        <div className="right-content-two">
                            <h6>Temukan</h6>
                            <a href="/faq"><p>Pusat Bantuan</p></a>
                            <a href="/privacy-policy"><p>Kebijakan Privasi</p></a>
                            <a href="/terms-of-use"><p>Kententuan Layanan</p></a>
                        </div>
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
