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

    
    JSX'de {} arasında blocklu kodlar kullanamayız if, switch gibi. (if yerine x ? y : z kullanılabilir.)

    handlerlarda (state değiştiren funclarda) direkt olarak state değişkenini değiştirmek yerine spread operatörü ile
    bir değişken yarat ve orada değişikliği yap ondan sonra setState içerisinde state değişikliğini yap.

    Radium library sayesinde js kısımlarında pseudo selectorlar ve media queryler kullanabiliriz.
    componenti export ederken HOC yapmak gerekir ==> Radium(compName) şeklinde.
    media query kullanılacaksa ana dosyayı Radium'dan import edilen <StyleRoot> tagi arasına alırız.

    styled-component library sayesinde const {StyledCompName} = styled.{tagType}`` şeklinde comp oluşturup backtickler arasına styling yapabiliriz.
    &:hover {} şeklinde pseudo selectionlar yapabiliriz.

    react-scripts 2> kullanıyorsan css module yapmak için bir şey yapmana gerek yok. {fileName}.module.css şeklinde dosya yapıp oradan import etmen yeterlidir.


    COMPONENT LIFECYCLES
    * sadece class componentlarda vardır.
    - CREATION
    --> constructor kullanımında super(props) olmalı.
    --- basic init için, init state için
    --- htpp request, browser storing gibi şeyler yapılmaz!
    --> getDerivedStateFromProps(props,state)
    --- sync state için
    --- fazla kullanılmaz
    --> render()
    --> render child components (FUNC DEĞİL!)
    --> componentDidMount()
    --- http requestler için kullanılır.
    --- promise then,catch dışında setState kullanma!

    COMPONENT LIFECYCLES - UPDATE
    --> shouldComponentUpdate(nextProps, nextState)
    --- decide whether to continue or not
    --- may cancel updating process!
    --> render()
    --> update child component props (FUNC DEĞİL!)
    --> getSnapshotBeforeUpdate(prevProps, prevState)
    --> componentDidUpdate()
    --- can cause side-effects
    --- don't update state unless it's on promise part of request

    useEffect() hook:
    componentDidMount şeklinde func componentlarda kullanılır.
    http requestleri yapılabilir içinde.
    ilk parametre olarak callback func alır bu da yapılacak işlemi belirtir.
    ikinci parametre değer ise hangi değerler değiştiğinde bu useEffect'in çalışacağıdır.
    [variable] şeklinde kullanılır ikinci parametre. boş olursa bu liste ilk defa mounted olduğu zaman çalışır.
    birden fazla useEffect kullanabiliriz.
    useEffect'te return ile function döndürülürse, o component unmount olduğu zaman yapılacak işlemler o function içinde yapılır.

    eğer shouldcomponentupdate ile bir componenttaki BÜTÜN propların değişimi kontrol edilip devam edilmesi karar veriliyorsa
    onun yerine PureComponent inherit ettiririz, normal component yerine

    bir componentin etrafının temel bir tag ile sarılması lazımdır (genelde div ile başlar).
    ama bazı zamanlarda (domda kirlilik oluşmasın gibi vs.) bunun yerine HOC kullanırız. (AUX)
    bu hoc bir componenttir ve sadece props.children döndürür.
    bunun yerine react ile gelen bir aux component vardır ve React.Fragment şeklinde ulaşışılır.
    HOC yazmanın birden fazla yolu vardır ve birden fazla tipte HOC tipleri vardır, farklı amaçlar için kullanılır.

    setState en uygun kullanımı:
    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changedCounter++
      }
    }
    )
*/