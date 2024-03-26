package color;

import java.awt.Color;
import java.awt.Font;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.MouseWheelEvent;
import java.awt.event.MouseWheelListener;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.SwingConstants;

public class WindowRGB extends JFrame{
    private JPanel panel;
    private JLabel etiq;
    private JButton rojo;
    private JButton verde;
    private JButton azul;
    private int pulsado = 0;
    private int red = 0;
    private int green = 0;
    private int blue = 0;
    
    public WindowRGB(){
        setSize(600, 400);
        setTitle("Pintalo");
        setLocationRelativeTo(null);
        
        inicio();
        colocarEtiqueta();
        colocarBotones();
    }
    
    private void inicio(){
        panel = new JPanel();
        panel.setLayout(null);     
        this.add(panel);
        
        evScroll();
    }
    
    private void colocarEtiqueta(){
        etiq = new JLabel("Color (Rojo, Verde, Azul)");
        etiq.setBounds(100, 30, 400, 50);
        etiq.setHorizontalAlignment(SwingConstants.CENTER);
        etiq.setFont(new Font("arial", 0, 20));
        
        panel.add(etiq);
    }
    
    private void colocarBotones(){
        //pulsado = 0 --> nada
        //pulsado = 1 --> rojo
        //pulsado = 2 --> verde
        //pulsado = 3 --> azul
        rojo = new JButton("Rojo");
        verde = new JButton("Verde");
        azul = new JButton("Azul");
        
        rojo.setBounds(50, 230, 130, 50);
        verde.setBounds(230, 230, 130, 50);
        azul.setBounds(410, 230, 130, 50);
        
        rojo.setForeground(Color.RED);
        rojo.setFont(new Font("arial rounded mt bold", 0, 20));
        verde.setForeground(Color.GREEN);
        verde.setFont(new Font("arial rounded mt bold", 0, 20));
        azul.setForeground(Color.BLUE);
        azul.setFont(new Font("arial rounded mt bold", 0, 20));
        
        
        panel.add(rojo);
        panel.add(verde);
        panel.add(azul);
        
        btnEvent();
    }
    
    private void evScroll(){
        MouseWheelListener rueda = new MouseWheelListener() {
            @Override
            public void mouseWheelMoved(MouseWheelEvent e) {
                if (pulsado != 0) {
                    if (pulsado == 1) {
                        red += e.getWheelRotation();
                        if (red < 0) {
                            red = 0;
                        }else if(red > 255){
                            red = 255;
                        }
                    }else if (pulsado == 2) {
                        green += e.getWheelRotation();
                        if (green < 0) {
                            green = 0;
                        }else if(green > 255){
                            green = 255;
                        }
                    }else{
                        blue += e.getWheelRotation();
                        if (blue < 0) {
                            blue = 0;
                        }else if(blue > 255){
                            blue = 255;
                        }
                    }
                }
                etiq.setText("color (Rojo: " + red + " Verde: " + green + " Azul: " + blue + ")" );
                panel.setBackground(new Color(red, green, blue));
            }
        };
        
        panel.addMouseWheelListener(rueda);
    }
    
    private void btnEvent(){
        rojo.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                pulsado = 1;
            }
        });
        
        verde.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                pulsado = 2;
            }
        });
        
        azul.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                pulsado = 3;
            }
        });
    }
}
