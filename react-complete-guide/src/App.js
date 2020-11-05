import React, { Component } from 'react';
import './App.css';

// extends component classını inherit ettiğini belirtir. bu sayede component olduğunu belirtiriz.
class App extends Component {
  
  // render kısmına yazılan şeyler sayfada renderlanır ve mutlaka olmalıdır.
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App! </h1>
      </div>
    );

    // JSX olmadığı zaman nasıl olacağı
    // ilk parametre bir tag ismi, native html de olabilir kendi oluşturduğumuz da!
    // ikinci parametre ise oluşturulacak olan elementin configrasyonu. (class/id, click event vs...)
    // eklenen diğer parametreler ise bu elementin içinde olan context.
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));

    // JSX kısıtlamaları
    // JS dosyası olduğu için class styling yerine className kullanılır çünkü class native javascriptte de kullanılmaktadır.
    // JSX expression genel olarak bir div çatısında olmalıdır (istisnaları vardır.)
  }
}

export default App;
