<?php
namespace Ejercicio1\Clases;
use Ejercicio1\Interfaces\Identificable;

abstract class Libro implements Identificable{
      protected string $titulo;
      protected string $autor;

      function __construct($titulo,$autor){
        $this->titulo=$titulo;
        $this->autor=$autor;
      }

      public function getTitulo(){
        return $this->titulo;
      }

      public function getAutor(){
        return $this->autor;
      }

     

      function imprime():string{
         return " Titulo del libro: ".$this->titulo." Autor del libro:".$this->autor;
      }
}

?>