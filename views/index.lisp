(ql:quickload :cl-who)

(setf (cl-who:html-mode) :HTML5)

(with-open-file (o (make-pathname :name "index" :type :"html") :direction :output :if-exists :supersede)
  (who:with-html-output (o nil :prologue t)
    (:html
      (:head 
        (:link :rel "stylesheet" :href "/stylesheet/style.css")
        (:script :type "text/javascript" :src "/script/")
        )
      )
    )
  )
