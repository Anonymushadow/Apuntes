package clicks;

import java.awt.Color;
import java.awt.Dimension;
import java.awt.event.MouseEvent;
import java.awt.event.MouseListener;
import javax.swing.JButton;
import javax.swing.JFrame;
import static javax.swing.JFrame.EXIT_ON_CLOSE;
import javax.swing.JPanel;
import javax.swing.SwingConstants;

public class Clicks extends JFrame{
    private JPanel panel = new JPanel();
    private JButton  btn;
    private int cont = 0;
    private String txt;
    
    public Clicks(){
        setSize(500, 500);
        setDefaultCloseOperation(EXIT_ON_CLOSE);//Cerrar programa al cerrar la ventana
        setTitle("Este es mi titulo ");//poner titulo a la ventana
        
        setLocationRelativeTo(null);//setLocation = centro de la pantalla
        setMinimumSize(new Dimension(200, 300));
        
        colocarPaneles();
        añadirBoton();
    }
    
        private void colocarPaneles(){
        this.getContentPane().add(panel);
        panel.setBackground(Color.PINK);
    }
        
         private void añadirBoton(){
        btn = new JButton("Haga click");
        btn.setBounds(50, 500, 100, 40);
        btn.setHorizontalAlignment(SwingConstants.CENTER);
        panel.add(btn);
        
        clicks();
    }
         
         private void clicks(){
         MouseListener click = new MouseListener() {
             @Override
             public void mouseClicked(MouseEvent e) {
                 cont += 1;
                 txt =  Integer.toString(cont);
                 btn.setText("Cantidad de veces presionado: " + txt);
             }

             @Override
             public void mousePressed(MouseEvent e) {
             }

             @Override
             public void mouseReleased(MouseEvent e) {
             }

             @Override
             public void mouseEntered(MouseEvent e) {
             }

             @Override
             public void mouseExited(MouseEvent e) {
             }
         };
             
             
             btn.addMouseListener(click);
         }
         
}
