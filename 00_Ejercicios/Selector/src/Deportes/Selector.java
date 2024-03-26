package Deportes;

import java.awt.Color;
import java.awt.Font;
import java.awt.Image;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.ButtonGroup;
import javax.swing.ImageIcon;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JRadioButton;
import javax.swing.SwingConstants;

public class Selector extends JFrame{
    private JPanel panel;
    private JLabel etiq;
    private JRadioButton rb1, rb2, rb3, rb4;
    private JLabel img;
    
    public Selector(){
        setSize(700, 400);
        setTitle("Selector");
        setLocationRelativeTo(null);
        setDefaultCloseOperation(EXIT_ON_CLOSE);
        
        añadirPanel();
        añadirEtiqueta();
        añadirBotones();
    }
    
    public void añadirPanel(){
       panel  = new JPanel();
       panel.setLayout(null);
       panel.setBackground(Color.MAGENTA);
       this.add(panel);
    }
    
    public void añadirEtiqueta(){
        etiq = new JLabel("Escoja su animal favorito");
        
        
        etiq.setBounds(20, 10, 200, 40);
        etiq.setFont(new Font("arial", 0, 15));
        panel.add(etiq);
    }
    
    public void añadirBotones(){
        rb1 = new JRadioButton("Zorro");
        rb2 = new JRadioButton("Loo");
        rb3 = new JRadioButton("Tigre");
        rb4 = new JRadioButton("Leon");
        
        rb1.setBounds(20, 80, 100, 40);
        rb1.setFont(new Font("arial rounded mt bold", 0, 18));
        rb1.setBackground(Color.MAGENTA);
        panel.add(rb1);
        
        rb2.setBounds(20, 140, 100, 40);
        rb2.setFont(new Font("arial rounded mt bold", 0, 18));
        rb2.setBackground(Color.MAGENTA);
        panel.add(rb2);
        
        rb3.setBounds(20, 200, 100, 40);
        rb3.setFont(new Font("arial rounded mt bold", 0, 18));
        rb3.setBackground(Color.MAGENTA);
        panel.add(rb3);
        
        rb4.setBounds(20, 260, 100, 40);
        rb4.setFont(new Font("arial rounded mt bold", 0, 18));
        rb4.setBackground(Color.MAGENTA);
        panel.add(rb4);
        
        ButtonGroup grupo = new ButtonGroup();
        
        grupo.add(rb1);
        grupo.add(rb2);
        grupo.add(rb3);
        grupo.add(rb4);
        
        seleccion();
    }
    
    private void seleccion(){
        img = new JLabel();
        img.setBounds(200, 80, 300, 200);
        panel.add(img);
        //si ponemos aca las imagenes no salen en el ejecutable, por eso se pone el getclass y getresource
        ImageIcon zorro = new ImageIcon(getClass().getResource("/Imagenes/Zorro.jpg"));
        ImageIcon lobo = new ImageIcon(getClass().getResource("/Imagenes/Lobo.jpg"));
        ImageIcon tigre = new ImageIcon(getClass().getResource("/Imagenes/Tigre.jpg"));
        ImageIcon leon = new ImageIcon(getClass().getResource("/Imagenes/Leon.jpg"));
        
        ActionListener btn1 = new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                img.setIcon(new ImageIcon(zorro.getImage().getScaledInstance(img.getWidth(), img.getHeight(), Image.SCALE_SMOOTH)));
            }
        };
        
        rb1.addActionListener(btn1);
        
        ActionListener btn2 = new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                img.setIcon(new ImageIcon(lobo.getImage().getScaledInstance(img.getWidth(), img.getHeight(), Image.SCALE_SMOOTH)));
            }
        };
        
        rb2.addActionListener(btn2);
        
        ActionListener btn3 = new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                img.setIcon(new ImageIcon(tigre.getImage().getScaledInstance(img.getWidth(), img.getHeight(), Image.SCALE_SMOOTH)));
            }
        };
        
        rb3.addActionListener(btn3);
        
        ActionListener btn4 = new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                img.setIcon(new ImageIcon(leon.getImage().getScaledInstance(img.getWidth(), img.getHeight(), Image.SCALE_SMOOTH)));
            }
        };
        
        rb4.addActionListener(btn4);
    }
}
