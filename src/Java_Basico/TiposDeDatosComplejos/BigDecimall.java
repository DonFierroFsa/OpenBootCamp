package Java_Basico.TiposDeDatosComplejos;

import java.math.BigDecimal;
//NO SE ENTENDIO porque me da 4.0000000124545525 con float y no 0.4
public class BigDecimall   {
    //NO SE ENTENDIO porque me da 4.0000000124545525 con float y no 0.4
    public static void main(String[] args) {
        System.out.println(0.1f+0.1f+0.1f+0.1f+0.1f+0.1f+0.1f+0.1f+0.1f+0.1f);
        System.out.println(0.1+0.1+0.1+0.1+0.1+0.1+0.1+0.1+0.1+0.1);
        System.out.println("Errores por no utilizar BigDecimal");

        BigDecimal valorA=new BigDecimal(3.14f);
        BigDecimal valorB=new BigDecimal(3.3f);
        //Operando BigDecimal
        BigDecimal resultado=  valorA.add(valorB);
        System.out.println(resultado);
        //NO SE ENTENDIO porque me da 4.0000000124545525 con float y no 0.4
    }
}
