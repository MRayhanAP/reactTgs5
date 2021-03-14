import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
  useParams,
  useRouteMatch
} from "react-router-dom";

export default function tgs5() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <AuthButton />
          <LoginPage />
        </Route>
        <HomeRoute path="/home">
          <AuthButton />
          <ProtectedPage />
        </HomeRoute>
        <Route path="/topics">
          <Topics />
        </Route>
      </Switch>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Toko ReyPedia!</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link to="/home" class="nav-item nav-link active">Home</Link>
            <Link to="/topics" class="nav-item nav-link active">Abouts</Link>
          </div>
        </div>
      </nav>

    </Router>
  );
}

function Topics() {
  // `path` untuk membuat jalur <Route> yang terhadap rute induk,
  //sedangkan` url` untuk membuat link.
  let { path, url } = useRouteMatch();
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Toko ReyPedia!</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link to="/home" class="nav-item nav-link active">Home</Link>
            <Link to="/topics" class="nav-item nav-link active">Abouts</Link>
          </div>
        </div>
      </nav>
      <hr />
      <h2>Abouts</h2>
      <ul>
      <li>
          <Link to={`${url}/M Rayhan Akbar Putra`}>Nama</Link>
        </li>
        <li>
          <Link to={`${url}/nxy929@gmail.com`}>Email</Link>
        </li>
        <li>
          <Link to={`${url}/Username: MRayhanAP`}>GitHub</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
          <br />
      <br />
      <br />
      <br />
      <br />
      <br />
        </Route>
        <Route path={`${path}/:topicId`}>
          <Topic />
        </Route>
      </Switch>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}


function Topic() {
  let { topicId } = useParams();

  return (
    <div>
      <h3>{topicId}</h3>
    </div>
  );
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

function AuthButton() {
  let history = useHistory();

  return fakeAuth.isAuthenticated ? (
    <p>
      Welcome!{" "}
      <button type="button" class="btn btn-danger"
        onClick={() => {
          fakeAuth.signout(() => history.push("/"));
        }}
      >
        Sign Out
      </button>
    </p>
  ) : (
      <p>You are not Logged in.</p>
    );
}

function HomeRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (
          children
        ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
      }
    />
  );
}

function ProtectedPage() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Toko ReyPedia!</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link to="/home" class="nav-item nav-link active">Home</Link>
            <Link to="/topics" class="nav-item nav-link active">Abouts</Link>
          </div>
        </div>
      </nav>
      <hr />
      <h1 class="text-center">DISKON 10%!!!!</h1>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card">
            <img src="https://images.tokopedia.net/img/cache/500-square/VqbcmM/2021/2/1/48379d32-e840-4b0c-98fb-c47da1a89337.jpg.webp?ect=4g" class="card-img-top"></img>
            <div class="card-body">
              <h5 class="card-title">Logitech G502 HERO High Performance Gaming Mouse</h5>
              <p class="card-text">Kondisi: Baru, Berat: 1.000 Gram, Kategori: Mouse Gaming, GARANSI RESMI 2 tahun Logitech Indonesia (sesuai di kemasan)
kemasan dan nota harus disertakan waktu klaim, Spesifikasi Teknis, Penelusuran, -Sensor: HERO', -Resolusi: 100 ''" 25.000 dpi, -Zero smoothing/akselerasi/filtering</p>
              <a href="https://www.tokopedia.com/logitech-g/logitech-g502-hero-high-performance-gaming-mouse?whid=0" class="btn btn-success btn-lg">Beli</a>

            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://images.tokopedia.net/img/cache/500-square/VqbcmM/2020/8/14/8b284b25-4b90-4e8b-b3e6-ea9a73d53bf9.jpg.webp?ect=4g" class="card-img-top"></img>
            <div class="card-body">
              <h5 class="card-title">NYK NEMESIS X 900 / X900 SPECTRUM ELITE Bluetooth Gaming Headset</h5>
              <p class="card-text">Kondisi: Baru, Berat: 900 Gram, Kategori: Headset Gaming, NYK NEMESIS X-900 SPECTRUM ELITE Bluetooth Gaming Headset with RGB Lighting 100% PRODUK RESMI, 100% PRODUK ORIGINAL, GARANSI RESMI 1 TAHUN</p>
              <a href="https://www.tokopedia.com/gaptechofficial/nyk-nemesis-x-900-x900-spectrum-elite-bluetooth-gaming-headset?whid=0" class="btn btn-success btn-lg">Beli</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://images.tokopedia.net/img/cache/500-square/product-1/2020/8/11/97642957/97642957_ddc1eebc-9ba0-4742-911f-19fc1719d914_1440_1440.webp?ect=4g" class="card-img-top"></img>
            <div class="card-body">
              <h5 class="card-title">Redragon Mechanical Gaming Keyboard Optical RGB BRAHMA - K586RGB-PRO</h5>
              <p class="card-text">Kondisi: Baru, Berat: 2.300 Gram, Kategori: Keyboard Gaming, Ultimate Keyboard of Redragon - Attention, please! Redragon K586 BRAHMA is in the house, the blend of each unique, extraordinary and practical Redragon keyboard features. The real ALL-IN-ONE pro gear, the epic combination.</p>
              <a href="https://www.tokopedia.com/redragon/redragon-mechanical-gaming-keyboard-optical-rgb-brahma-k586rgb-pro" class="btn btn-success btn-lg">Beli</a>
            
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://images-na.ssl-images-amazon.com/images/I/619BkvKW35L._SL1500_.jpg" class="card-img-top"></img>
            <div class="card-body">
              <h5 class="card-title">PlayStation 5 Console</h5>
              <p class="card-text">Lightning Speed - Harness the power of a custom CPU, GPU, and SSD with Integrated I/O that rewrite the rules of what a PlayStation console can do.
Stunning Games - Marvel at incredible graphics and experience new PS5 features.
Breathtaking Immersion - Discover a deeper gaming experience with support for haptic feedback, adaptive triggers, and 3D Audio technology.</p>
<a href="https://www.amazon.com/PlayStation-5-Console/dp/B08FC5L3RG" class="btn btn-success btn-lg">Beli</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://ecs7.tokopedia.net/img/cache/900/product-1/2020/6/30/4544681/4544681_68948ab0-74b1-4bc0-b1c3-7f1357ec1c15_700_700" class="card-img-top"></img>
            <div class="card-body">
              <h5 class="card-title">ASUS ROG STRIX G512LI-I75TB6T</h5>
              <p class="card-text">Spesifikasi :
- Processor Onboard : 10th Generation Intel® Core™ i7-10750H Processor (12M Cache, up to 5.00 GHz)
- Memori Standar : 8 GB DDR4 3200Hz SDRAM, SO-DIMM socket for expansion, up to 32 GB SDRAM,
- Tipe Grafis : NVIDIA® GeForce® GTX 1650Ti GDDR6, with 4GB VRAM
- Sistem Operasi : Windows 10 Home
- Ukuran Layar : 15.6 (16:9) LED-backlit FHD (1920x1080) Anti-Glare IPS-level 144Hz Panel 100% SRGB
With FreeSync
- STORAGE : 512GB SSD SATA PCIE
- Keyboard : Illuminated Chiclet Keyboard RGB</p>
<a href="https://www.tokopedia.com/envicstore/asus-rog-strix-g512li-i75tb6t-i7-10750h-8gb-512gb-gtx1650ti-4gb-144hz?whid=0" class="btn btn-success btn-lg">Beli</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://ecs7.tokopedia.net/img/cache/900/product-1/2019/11/2/810764/810764_fa392dc9-656f-46d2-8198-a7485d770e53_1000_1000" class="card-img-top"></img>
            <div class="card-body">
              <h5 class="card-title">Xbox One S Wireless Controller PC Windows</h5>
              <p class="card-text">Precision controller compatible with Xbox One, Xbox One S and Windows 10.
Includes Bluetooth technology for gaming on Windows 10 PCs and tablets.
Stay on target with textured grip.
Get up to twice the wireless range compared to previous Xbox One Controllers (tested using the Xbox One S Console).
Experience the enhanced comfort and feel of the new Xbox Wireless Controller.</p>
<a href="https://www.tokopedia.com/bekasigame/stik-stick-xbox-one-s-wireless-controller-pc-windows-original-putih?whid=0" class="btn btn-success btn-lg">Beli</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://images.tokopedia.net/img/cache/500-square/VqbcmM/2020/9/30/bb7ba333-35ce-4d91-ae69-94b974467299.jpg.webp?ect=4g"  class="card-img-top"></img>
            <div class="card-body">
              <h5 class="card-title">Moondrop Spaceship With Mic</h5>
              <p class="card-text">Kondisi: Baru, Berat: 500 Gram, Kategori: Earphone, Etalase: Semua Etalase, Kondisi Baru dan Segel, Garansi 1 Tahun, Harga : 310.000, Kontak : 081212200060 (Rendy)</p>
<a href="https://www.tokopedia.com/jabensurabaya/moondrop-spaceship-with-mic-garansi-1-tahun?utm_source=Android&utm_source=Android&utm_medium=Share&utm_medium=Share&utm_campaign=Product%20Share&utm_campaign=Product%20Share&_branch_match_id=848808794482655941" class="btn btn-success btn-lg">Beli</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

function LoginPage() {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };

  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <button type="button" class="btn btn-primary" onClick={login}>Log in</button>
    </div>
  );
}