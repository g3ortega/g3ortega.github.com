---
layout: post
title: Crystal (Lenguaje de Programación), el porqué y el cómo
description: "Crystal un lenguaje moderno, rápido y con una sintáxis elegante creado en Argentina."
date: 2016-06-10 09:43:59
author: Gerardo Ortega
categories: programming_languages
cover:  "assets/crystal-lenguaje-programacion-logo.png"
ref: crystal_programming_language
lang: es
---

Crystal es uno de los nuevos lenguajes en la escena. Aunque no tan conocido como Rust, Elixir o Julia, tiene mucho que ofrecer. Inicio en 2012, y según describen sus creadores, sus características principales son:

- Sintaxis similar a Ruby
- Estáticamente tipado 
- Compilado
- Self-hosted (Crystal está escrito en… crystal)

Ademas de eso, el propósito del lenguaje es simple:

- Tener una sintaxis amigable con Ruby, pero con un performance tan bueno como C.

Hay muchas más características disponibles en el sitio web oficial. Pero en particular lo que me ha llamado la atención a mí en particular, siendo un desarrollador que ama Ruby, es su similitud con el lenguaje. Tener una sintaxis tan buena como Ruby y un performance semejante al de C, es el santo grial en ésta área.

## Sintaxis de Crystal

Quiero comenzar con la sintaxis que es la cara del lenguaje. Cuando inicie con Ruby, viniendo de Java, lo que más me cautivo fue la simplicidad con la cual se hacían las cosas, era como escribir en pseudocódigo. Y con Crystal no es la excepción, si bien no es 100% igual a Ruby (más para bien que para mal), conserva su esencia. A continuación por ejemplo les dejo el código de un servidor HTTP:

{% highlight ruby %}
require "http/server"

server = HTTP::Server.new(8080) do |request|
  HTTP::Response.ok "text/plain", "Hello world! The time is #{Time.now}"
end

puts "Listening on http://0.0.0.0:8080"
server.listen
{% endhighlight %}

## Más allá de la sintaxis 

Crystal corre sobre la LLVM, una tecnología que sirve como framework de compilación y puede generar código de maquina con un performance similar (o en ocasiones superior) a C. LLVM también es usado por otros nuevos lenguajes como Rust o Swift y ofrece una enorme flexibilidad, soporte y muchas libretas complementarias. Ésto ha permitido a Crystal agregar features de las cuales Ruby carece, como concurrencia y paralelismo, éste último cabe destacar que está en desarrollo.

Ahora bien, aclaro que Crystal como lenguaje no pone ninguna innovación sobre la mesa que otros lenguajes no tengan ya. En otras palabras, el diseño de muchos de los nuevos lenguajes que han surgido recientemente, ha ido orientado a extender o crear mejores maneras de hacer algunas cosas. Crystal por el contrario, en una buena medida ha tratado de integrar muchos de los mejores features de algunos lenguajes como Go o Erlang. Lo que Crystal si ofrece y que no debe ser pasado por alto, es una elegante sintaxis, más un excelente performance, eso sin tener que reaprender muchas cosas, lo cual lo hace único, productivo y agradable para trabajar con él.

## Aprendiendo Crystal

Acá una lista de recursos que pueden ayudarte a iniciar con el lenguaje, cabe destacar que siendo un lenguaje joven no hay mucho disponible, pero las cosas van mejorando con el tiempo:

- [La documentación oficial](http://crystal-lang.org/docs/)
- [Documentación del API](http://crystal-lang.org/api/)
- [Lista de librerias en Github para uso o bien para aprender del código](https://github.com/veelenga/awesome-crystal)

## El futuro de Crystal

Ok, soy Ingeniero de Software, no adivino. Pero puedo hacer mis propias apuestas acerca del futuro de Crystal, sobretodo considerando lo que me ha cautivado y aquello que llena muchos de los vacíos que Ruby en la actualidad tiene, por mencionar algunos:

- Concurrencia
- Performance
- Paralelismo (en proceso)

Y eso, en mi caso, es de suma importancia. Después de todo, los tiempos han cambiado, así como nuestras necesidades. Vivimos en el tiempo del Big Data, del Internet of Things, del VR, etc. Particularmente una de las áreas que más ha llamado mi atención es Inteligencia Artificial, y cada vez necesito herramientas con un excelente performance, pero tradicionalmente se tiene que escoger dos tecnologías, una para el modelado (Python o R por ejemplo) y otra para la implementación (C, C++ o incluso Java) por razones obvias. En cambio con un lenguaje como Crystal es la panacea, no es necesario duplicar esfuerzos.

En éste sentido he probado también un lenguaje nuevo que está especialmente diseñado con performance y productividad en mente aplicado a computación científica: Julia. Sin embargo, no quiero un lenguaje de nicho, sino uno que me ayude a brindar soluciones en diferentes ámbitos (o algo así como Python con todas sus librerías, pero con el performance de C :p).

Por eso tengo mis apuestas en Crystal, un lenguaje todavía en pañales, pero con mucho potencial de crecimiento, tiene todo lo necesario para eso. Ruby no fue todo el tiempo popular, sino hasta después de Rails, lo mismo puede pasar con cualquier lenguaje de programación. La clave está en la comunidad en torno al lenguaje, quienes se encargan de hacer que las cosas sucedan. De mi parte pienso contribuir en el área que me apasiona.


