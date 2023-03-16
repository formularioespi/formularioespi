
package sos;

import java.util.List;
import java.util.ArrayList;
import java.util.Scanner;


public class Sos {

    
    public static void main(String[] args) {
        List<String>  ubicarpatrulla=  new ArrayList<>();
        List<String>  violenciage=  new ArrayList<>();
        List<String>  denuncia=  new ArrayList<>();
        List<String>  transito=  new ArrayList<>();
        List<String>  rescate=  new ArrayList<>();
        Scanner sca = new Scanner(System.in);
        
        int respuesta;
        String resp;
       
        do{
           System.out.println("Ingrese su numero telefonico: ");
           String tel = sca.next();
           System.out.println("Cual es su emergencia?: \n1.-Ubicar patrulla \n2.-Violencia de genero \n3.-Denuncia ciudadana \n4.-Trancito y vialidad \n5.-Rescate y urgencias \n6.-Total de emergencias \n7.-Salir");
           respuesta = sca.nextInt();
           
           switch(respuesta){
               
               case 1:
                   ubicarpatrulla.add(tel);
                   
                   break;
                   
               case 2:
                   violenciage.add(tel);
                   System.out.println(violenciage.size());
                   break;
                   
               case 3:
                   denuncia.add(tel);
                   System.out.println(denuncia.size());
                   break;
               case 4:
                   transito.add(tel);
                   System.out.println(transito.size());
               case 5:
                   rescate.add(tel);
                   System.out.println(rescate.size());
                   break;
           }
           
           System.out.println("Tiene otra emergencia?: ");
           resp = sca.next(); 
        }while(resp.equalsIgnoreCase("si"));  
        
        System.out.println(ubicarpatrulla.size());
    }   
}
