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
    </div>
  );
}

export default App;
