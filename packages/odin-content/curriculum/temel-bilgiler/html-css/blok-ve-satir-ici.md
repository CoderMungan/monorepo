---
title: 'Blok ve Satır İçi Öğeler'
---

### Giriş

Önceki derste bağlantısı verilen MDN kutu modeli makalesinde, farklı görüntüleme tiplerinin, aralarında küçük farklar bulunan kutu modellerine sahip olduklarından bahsedilmektedir. Ayrıca, `display` özelliği değiştiğinde, bir kutunun nasıl hesaplandığının değiştiğinden de bahseder. Bu derste, kullanabileceğiniz farklı görüntüleme değerlerini daha ayrıntılı olarak inceleyeceğiz.

### Derse Genel Bakış

Bu bölüm, bu derste öğreneceğiniz konulara genel bir bakış içerir.

- "Normal akış" hakkında bilgi edineceksiniz.
- `block(blok)` ve `inline(satır içi)` öğeler arasındaki farkı öğreneceksiniz.
- Hangi öğelerin varsayılan olarak `block`, hangilerinin de `inline` olduğunu öğreneceksiniz.
- Div ve span'lerin ne olduğunu öğreneceksiniz.

### Block ve Inline

Şimdiye kadar öğrendiğiniz öğelerin çoğu blok öğelerdir. Başka bir deyişle, varsayılan stilleri `display: block` şeklindedir. <span id="block-inline-difference"></span>Varsayılan olarak blok öğeleri, sayfada üst üste yığılmış halde görünür ve her yeni öğe yeni bir satırda başlar.

Ancak, satır içi öğeler yeni bir satırda başlamazlar. Yanına yerleştirildikleri öğelerle aynı satırda bulunurlar. Satır içi öğenin açık bir örneği, bir bağlantı veya `<a>` etiketidir. Bu tür bir öğeyi paragrafın ortasına yerleştirirseniz, o paragrafın bir parçası gibi davranır. ([Yani bu şekilde...](https://www.youtube.com/watch?v=dQw4w9WgXcQ)) Bağlantının metni, o paragraftaki diğer kelimelerle yan yana durur. Ek olarak, satır içi öğelerde padding(iç kenar boşluğu) ve margin(dış kenar boşluğu) farklı davranır. Genel olarak, satır içi öğelere fazladan padding veya margin koymaya çalışmak istemezsiniz.

Satır içi blok öğeleri, satır içi öğeler gibi davranır, ancak blok stili padding ve margin'e sahiptir. Satır içi blok, bilinmesi yararlı bir araçtır, ancak pratikte, bir grup kutuyu sıralamaya çalışıyorsanız, muhtemelen flexbox'a daha sık başvuracaksınız. Flexbox bir sonraki derste derinlemesine ele alınacaktır.

### Div'ler ve Span'ler

Div ve span'lerden bahsetmeden blok ve satır içi öğeler hakkında konuşamayız. Şimdiye kadar karşılaştığımız diğer tüm HTML öğeleri içeriklerine anlam katarlar. Örneğin, paragraf öğeleri, tarayıcıya içerdiği metni bir paragraf olarak görüntülemesini söyler. Strong öğeleri, tarayıcıya içindeki metnin önemli olduğunu söyler. Ancak div'ler ve span'ler içeriklerine özel bir anlam katmazlar. Onlar sadece her şeyi içerebilen genel kutulardır.

Bu tür öğelere sahip olmak, ilk bakışta göründüğünden çok daha kullanışlıdır. Sık sık, yalnızca "kanca" öğe olarak hizmet eden öğelere ihtiyaç duyarız. Onlara CSS ile stil vermek için bir id veya sınıf ekleyebiliriz. Sıkça karşılaşacağımız başka bir kullanım durumu da, ilgili öğeleri bir ana öğe altında gruplayarak sayfada doğru bir biçimde konumlandırmaktır. Div'ler ve span'ler bunu yapmamıza olanak sağlar.

Div, varsayılan olarak blok düzeyinde bir öğedir. Genellikle diğer öğeleri gruplandırmak için bir konteyner öğesi olarak kullanılır. Div'ler, sayfayı farklı bloklara *bölmemize* ve bu bloklara stil uygulamamıza olanak tanır.

<p
  class="codepen"
  data-height="300"
  data-theme-id="dark"
  data-default-tab="html,result"
  data-slug-hash="KKXXbwR"
  data-preview="true"
  data-user="TheOdinProjectExamples"
  style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;"
>
  <span>
    <a href="https://codepen.io">CodePen</a>'de TheOdinProject (
    <a href="https://codepen.io/TheOdinProjectExamples">
      @TheOdinProjectExamples
    </a>
    ) tarafından oluşturulan
    <a href="https://codepen.io/TheOdinProjectExamples/pen/KKXXbwR">
      block-inline-lesson-div-example
    </a>{' '}
    Pen örneğine göz atın.
  </span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

Span, varsayılan olarak satır içi düzeyde bir öğedir. Metin içeriğini ve satır içi HTML öğelerini şekillendirmek amacıyla gruplamak için kullanılabilir ve sadece başka hiçbir anlamsal HTML öğesi uygun olmadığında kullanılmalıdır.

<p
  class="codepen"
  data-height="300"
  data-theme-id="dark"
  data-default-tab="html,result"
  data-slug-hash="abLLPor"
  data-preview="true"
  data-user="TheOdinProjectExamples"
  style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;"
>
  <span>
    <a href="https://codepen.io">CodePen</a>'de TheOdinProject (
    <a href="https://codepen.io/TheOdinProjectExamples">
      @TheOdinProjectExamples
    </a>
    ) tarafından oluşturulan
    <a href="https://codepen.io/TheOdinProjectExamples/pen/abLLPor">
      block-inline-lesson-span-example
    </a>{' '}
    Pen örneğine göz atın.
  </span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### Ödev

<div class="lesson-content__panel" markdown="1">

1.  "Normal akış" kavramı, kutu modeli kaynaklarında bahsedilir, ancak çok belirgin bir şekilde ele alınmamıştır. Öğelerin varsayılan olarak nasıl davrandıklarını anladığınızdan emin olmak için [MDN'den "Normal Akış"](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Normal_Flow)ı okuyun.
2.  W3 schools'un ["HTML Blok ve Satır İçi Öğeler"](https://www.w3schools.com/html/html_blocks.asp) sayfası, kısa bir açıklama ve tüm varsayılan blok ve satır içi öğelerin listesini içerir.
3.  The Digital Ocean'ın ["CSS'de Satır İçi ve Satır İçi Blok Gösterimi"](https://www.digitalocean.com/community/tutorials/css-display-inline-vs-inline-block) dersi, `inline` ve `inline-block` arasındaki farkı netleştiren birkaç harika örnek içerir.
4.  [CSS egzersizleri repository'mize](https://github.com/TheOdinProject/css-exercises) gidin ve `margin-and-padding` klasöründeki "01-margin-and-padding-1" ve "02-margin-and-padding-2" egzersizlerini yapın.

</div>

### Bilgi Ölçme

Bu bölüm, dersi anlayıp anlamadığınızı kontrol etmeniz için sorular içermektedir. Bir soruyu yanıtlamakta zorlanıyorsanız, soruya tıklayıp yönlendirdiği materyali inceleyin.

- [Blok öğe ile satır içi öğenin farkı nedir?](#block-inline-difference)
- [Satır içi öğe ile satır içi blok öğenin farkı nedir?](https://www.digitalocean.com/community/tutorials/css-display-inline-vs-inline-block)
- [`h1` blok mudur, satır içi midir?](https://www.w3schools.com/html/html_blocks.asp)
- [`button` blok mudur, satır içi midir?](https://www.w3schools.com/html/html_blocks.asp)
- [`div` blok mudur, satır içi midir?](https://www.w3schools.com/html/html_blocks.asp)
- [`span` blok mudur, satır içi midir?](https://www.w3schools.com/html/html_blocks.asp)

### Ek Kaynaklar

Bu alanda içerikle alakalı faydalı linkler bulunmaktadır. Zorunlu değildir, ek olarak düşünülmelidir.

- [Bu ders](https://learnlayout.com/no-layout.html) biraz eski olmasına rağmen anlaşılır örnekler içerir. İlk 6 slayt, şu ana kadar gördüğümüz materyali kapsamaktadır.
