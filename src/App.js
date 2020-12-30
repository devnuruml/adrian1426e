import { Formik, Form, Field } from 'formik';
import './header.css';

const initialState = {
  search: ''
};

function App() {
  return (
    <div>
      <header>
        <Formik
          initialValues={initialState}
          onSubmit={async values => { console.log(values) }}
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
