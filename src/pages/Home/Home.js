import Header from '../../components/header/Header'
import './Home.css'
import Footer from '../../components/footer/Footer'
function Home() {
    return (
        <div className='container-fluid d-flex flex-column '>
            <div className='container d-flex flex-column justify-content-between '>
                <Header />

                <Footer />
            </div>
        </div >
    )
}

export default Home