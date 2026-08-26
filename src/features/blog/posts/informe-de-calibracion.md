Un informe de calibración es el documento que registra cuánto se desvía un instrumento respecto de un patrón trazable, y con qué incertidumbre se determinó esa desviación. No dice si el instrumento "pasó": dice cuánto se aparta y qué tan seguros estamos de ese número.

## ¿Para qué sirve exactamente?

Sirve para poder confiar en lo que mide ese instrumento, dentro de un margen conocido. Sin él, un termómetro que marca 5 °C es una afirmación sin respaldo; con él, se sabe que marca 5 °C con una desviación determinada y una incertidumbre declarada, y eso ya es evidencia utilizable ante una auditoría.

Es también el cimiento de todo lo demás. Un [mapeo térmico](/blog/mapeo-termico) hecho con sensores sin calibración vigente no prueba nada, porque no hay forma de saber cuánto se desvían sus lecturas.

## ¿Qué debe contener?

Este es un informe real emitido por CAYCER, con las firmas protegidas. Sirve para recorrer el documento sección por sección:

![Informe de calibración de un termohigrómetro emitido por CAYCER, mostrando datos del instrumento, del patrón, trazabilidad, condiciones ambientales y sello de acreditación EMA](/informe-de-calibracion.webp "Informe de calibración de un termohigrómetro. Las firmas se sustituyeron por bloques; el resto del documento está íntegro.")

**Identificación del informe.** Un número único —aquí `CC-T-2024-0174`— que permite rastrear ese documento en el sistema del laboratorio. Si dos informes comparten número, algo está mal.

**Información del cliente.** Nombre, domicilio y teléfono de quien solicita el servicio.

**Información del instrumento bajo calibración (IBC).** Tipo, marca, modelo, número de serie, identificación interna, intervalo de medida y **resolución**. El número de serie es lo que ata el informe a un aparato físico concreto: sin él, el documento podría referirse a cualquier equipo del mismo modelo.

**Las tres fechas.** Recepción, calibración y emisión. Se distinguen a propósito y no son adorno: la calibración es válida respecto a la fecha en que se hizo, no a la fecha en que se imprimió el papel.

**Patrón de trabajo.** Qué instrumento se usó como referencia, con su marca, modelo, serie, intervalo, resolución e incertidumbre máxima. Aquí conviene fijarse en algo: el patrón debe ser sensiblemente mejor que el instrumento que mide. En este informe el patrón resuelve 0.01 °C contra los 0.1 °C del instrumento calibrado.

**Trazabilidad metrológica.** La cadena que conecta el patrón con el patrón nacional. En México eso significa el CENAM, y se declara el número del certificado que lo respalda. Sin esta sección el informe no tiene anclaje: sería una comparación contra algo cuya exactitud nadie respaldó.

**Acreditación y CMC.** El intervalo acreditado y la mejor capacidad de medición del laboratorio. Es lo que define hasta dónde llega el alcance evaluado por la EMA.

**Condiciones ambientales de referencia.** Temperatura y humedad durante la calibración, con su variación. Importan porque un instrumento no se comporta igual a 21 °C que a 35 °C, y el resultado solo es representativo de las condiciones en que se obtuvo.

**Procedimiento aplicado.** El código del método interno usado, en este caso `PCT-01, "Calibración de termómetros de lectura directa"`. Permite saber qué se hizo y poder repetirlo.

**Responsables.** Quién ejecutó la calibración y quién autorizó los resultados, con nombre y cargo. Son dos personas distintas a propósito: quien mide no se aprueba a sí mismo.

## ¿Cómo se produce dentro del laboratorio?

El informe no se escribe a mano: se genera desde un formato de registro controlado, y esa es justamente la parte que casi nunca se ve desde fuera.

El formato tiene varias pestañas encadenadas. Una es la hoja de toma de datos, donde se vacían las lecturas del proceso. Otras contienen las contribuciones de incertidumbre de cada magnitud de entrada, la información de los patrones, la de los medios termométricos y las curvas de ajuste de los patrones de medida. El informe que ve el cliente es la salida de todo eso.

Las celdas están codificadas por color y con distinto nivel de protección: unas son modificables, otras son listas desplegables con opciones cerradas, y otras están bloqueadas porque las calcula el sistema. Si alguien intenta editar una celda bloqueada, el archivo lo impide. No es una comodidad de diseño: es control de integridad de datos, y es lo que evita que un valor calculado se sobrescriba a mano.

El proceso, en orden:

1. Se asigna el **código del informe** y se recuperan los datos del instrumento desde el registro de equipos, que se llenó al recibirlo. Nada se vuelve a teclear.
2. Se capturan las **condiciones ambientales** mínima y máxima observadas durante la calibración, tomadas de la hoja de datos.
3. Se seleccionan el **medio termométrico** y el **patrón de referencia** empleados, de listas cerradas.
4. Se definen los **puntos de calibración** y se capturan las lecturas del patrón y del instrumento en cada uno. Cada punto se toma varias veces y lo que se reporta es el promedio.
5. Se ajusta la **resolución con que se reporta cada cifra**. Este paso es más importante de lo que parece: el patrón puede resolver milésimas, pero el sesgo se expresa a la resolución del instrumento calibrado. Reportar más cifras de las que el instrumento puede distinguir es inventar precisión.
6. Se **revisa el informe completo** contra los datos de origen, se guarda en el sistema y se emite en PDF con el código asignado.

Ese paso 6 no es un trámite. En la revisión aparecen cosas como una fecha de calibración mal heredada del registro de equipos, y corregirla obliga a volver atrás, arreglar el origen y regenerar el informe. Es tedioso y es exactamente para lo que existe.

## ¿Qué revisar cuando reciba un informe?

Antes de archivarlo, cinco comprobaciones que toman dos minutos:

- Que el **número de serie** corresponda al instrumento que usted tiene, no a otro del mismo modelo.
- Que la **fecha de calibración** sea la real del servicio, y que su vigencia cubra el periodo que necesita respaldar.
- Que aparezca la **trazabilidad** y el certificado del patrón. Si no está, el informe no tiene anclaje.
- Que el **intervalo calibrado** incluya el rango en que usted realmente usa el instrumento. Un termómetro calibrado de 0 a 50 °C no respalda mediciones a −20 °C.
- Que el **informe declare si es acreditado o no**, y en qué alcance. Los dos son válidos; conviene saber cuál tiene en la mano.

## Lo que un informe de calibración no le dice

No le dice si el instrumento sirve o no sirve. Reporta la desviación y la incertidumbre; decidir si eso es aceptable depende de lo que usted necesite medir y con qué tolerancia. Un error de 1 °C puede ser irrelevante en un horno industrial e inaceptable en una cámara de 2 a 8 °C.

Cuando el informe sí incluye una declaración de conformidad, esta se apoya en una regla de decisión acordada de antemano, que establece cómo se considera la incertidumbre al comparar contra el límite. Si esa regla no se pactó antes de medir, la declaración pierde sustento.

## El siguiente paso

Si tiene instrumentos que vigilan condiciones críticas, la pregunta útil no es si están calibrados, sino si los informes cubren el rango en que los usa y siguen vigentes para el periodo que necesita respaldar.

Puede ver el alcance del servicio en [calibración de instrumentos](/servicios/calibracion), entender cómo encaja en la puesta en marcha de un equipo en [calificación de equipos](/blog/calificacion-de-equipos), o resolver dudas puntuales en [preguntas frecuentes](/preguntas-frecuentes).
