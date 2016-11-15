---
layout: post
title: "Machine Learning: de la práctica a producción [REVIEW]"
date: 2016-11-15 08:43:59
author: Gerardo Ortega
categories: review
cover:  "assets/machine_learning.jpg"
lang: es
---

Ramanan Balakrishnan escribió un excelente [post](https://engineering.semantics3.com/2016/11/13/machine-learning-practice-to-production/) explicando el proceso que conlleva el flujo de trabajo de trabajo para productos orientados a inteligencia Artificial, en particular hacia Aprendizaje Automatizado o Machine Learning, ahí se plantea algunas interrogantes que vale la pena retomar cuando decidimos emprender algún proyecto orientado a AI con miras a que dicho producto sea lanzado en entorno real de producción.  

### Basura entra, basura sale

    ¿Tengo una fuente de datos confiable? ¿Dónde obtengo mis datos?

### Transformando los datos en entradas

    ¿Qué pasos de pre-procesamiento son requeribles? ¿Cómo normalizo mis datos antes de usar mis algoritmos?

### Ahora, iniciamos?

    ¿Qué lenguaje o framework uso? Python, R, Java, C++? Caffe, Torch, Theano, TensorFlow, DL4J?

### Entrenando los modelos

    ¿Cómo puedo entrenar a mis modelos? ¿Debo comprar GPUs en efectivo o usar instancias de hardware personalizadas en la nube con EC2? ¿Puedo paralelizar el procesamiento para aumentar la velocidad?

### Ningún sistema es una isla

    ¿Necesito hace predicciones por lotes o en tiempo real? Modelos implícitos o interfaces? RPC o REST?

### Supervisión del rendimiento

    ¿Cómo puedo dar seguimiento a mis predicciones? ¿Cómo puedo registrar los resultados en una base de datos? 


<b>Acá la imagen que resume el proceso a seguir.</b>

![Machine Learning de desarrollo a producción](/assets/machine_learning_desarrollo_a_produccion.png)
