/*

    JSX olmadığı zaman nasıl olacağı
    ilk parametre bir tag ismi, native html de olabilir kendi oluşturduğumuz da!
    ikinci parametre ise oluşturulacak olan elementin configrasyonu. (class/id, click event vs...)
    eklenen diğer parametreler ise bu elementin içinde olan context.
    return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));

    JSX kısıtlamaları
    JS dosyası olduğu için class styling yerine className kullanılır çünkü class native javascriptte de kullanılmaktadır.
    JSX expression genel olarak bir div çatısında olmalıdır (istisnaları vardır.)

    Custom taglari ilk harfi büyük olacak şekilde kullanmalı.

    JSX içine yazılan html kısımlarıyla javascript kodlarını ayırmak için
    Javascript kodlarını {} double curly brackets içine yazmalıyız.

    Function component oluştururken props.propName şeklinde ulaşabiliriz.
    Class component oluştururken ise this.propsName şeklide ulaşırız.

    props.children tagların arasına yazılan textleri display etmek/çağırmak için kullanılır.

    props dışarıdan aktarılır ve kullanılır.
    state componentin içinde tanımlanır ve kullanılır.

    https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/8124210#overview liste
    dinlenilebilir eventler (which events can be listened?):
        clipboard events:
            onCopy onCut onPaste --> DOMDataTransfer clipboardData
        composition events:
            onCompositionEnd onCompositionStart onCompositionUpdate --> string data
        keyboard events:
            onKeyDown onKeyPress onKeyUp --> boolean altKey-ctrlKey, number charCode, number keyCode, string key
        focus events:
            onFocus onBlur --> DOMEventTarget relatedTarget
        form events:
            onChange onInput onInvalid onSubmit
        mouse event:
            onClick onDoubleClick onDrag onDragEnd onDragStart onMouseDown onMouseMove...

    class componentlarda oluşturulacak fonksiyonlarda arrow func kullan ki 'this' kullanılabilir olsun.

    ReactDOM sadece setState ve props değişikliği olduğunda reRender edilir.

    class componentlara container comp'da denir ve ne kadar az o kadar iyidir.
    class componentların içine stateless/function complar eklenmelidir.
    stateler container compenantlarda değiştirilip props şeklinde içeri aktarılmalıdır.

    oluşturulan fonksiyonlara argüman göndermek: 
        - this.switchNameHandler.bind(this,'Anıl')
        - () => this.switchNameHandler('Görkem') fazla kullanılmaması önerilir!
*/