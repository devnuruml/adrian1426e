import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import './header.css';

const initialState = {
  search: ''
};

const keyApi = 'Client-ID WFBzcz_fW2yWncQ0Tob15dXrKQJT8ZA4uJI3dtDt3sc';

function App() {
  const [fotos, setFotos] = useState([]);

  const responseApi = async values => {
    const response = await fetch(`https://api.unsplash.com/search/photos?per_page=20&query=${values.search}`, {
      headers: { 'Authorization': keyApi }
    });

    const data = await response.json();
    setFotos(data.results);
  };

  const openFoto = url => {
    window.open(url);
  };

  return (
    <div>
      <header>
        <Formik
          initialValues={initialState}
          onSubmit={responseApi}
        >
          <Form>
            <Field name='search' />
          </Form>
        </Formik>
      </header>

      <div className="container">
        <div className="center">
          {fotos.map(foto => (
            <article
              key={foto.id}
              onClick={() => openFoto(foto.links.html)}
            >
              <img src={foto.urls.regular} alt={foto.alt_description} />
              <p>{[foto.description, foto.alt_description].join(' - ')}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
