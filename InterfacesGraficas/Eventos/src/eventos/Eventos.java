package eventos;

import java.awt.Color;
import java.awt.Dimension;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.KeyEvent;
import java.awt.event.KeyListener;
import java.awt.event.MouseEvent;
import java.awt.event.MouseListener;
import java.awt.event.MouseMotionListener;
import java.awt.event.MouseWheelEvent;
import java.awt.event.MouseWheelListener;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JTextArea;
import javax.swing.JTextField;

public class Eventos extends JFrame{
        private JLabel saludo;
        private JPanel panel;
        private JTextField inpt;
        private JButton btn;
        private JTextArea txtArea;
        public Eventos(){//constructor --> aca se pone todo el codigo fuera de funciones que se ejecuta automaticamente        
            setSize(500, 500);//Tamaño = ancho, largo
            setDefaultCloseOperation(EXIT_ON_CLOSE);//Cerrar programa al cerrar la ventana
            setTitle("Eventos");//poner titulo a la ventana
        
            setLocationRelativeTo(null);//setLocation = centro de la pantalla
            setMinimumSize(new Dimension(300, 300));//tamaño minimo de la ventana 
            this.getContentPane().setBackground(Color.ORANGE);
        
            colocarPaneles();
            colocarTexto();
            colocarInput();
            colocarBTN();
            colocarTxtArea();
        }
        
        
        private void colocarPaneles(){
            panel = new JPanel();//introducir panel
            panel.setLayout(null);//eliminar diseños predeterminados
            this.getContentPane().add(panel);
            panel.setBackground(Color.ORANGE);
            
            
        }
        
        private void colocarTexto(){
            JLabel etiqueta = new JLabel("Ingrese su nombre: ");//crear etiqueta
            etiqueta.setBounds(30, 10, 200, 30);
            panel.add(etiqueta);//añadir etiqueta
        }
        
        private void colocarInput(){
        inpt = new JTextField();
        inpt.setBounds(30, 50, 300, 30);
        panel.add(inpt);
        
        mouseMove();
        teclado();
        }
        
        private void colocarTxtArea(){
            txtArea = new JTextArea();
            txtArea.setBounds(500, 0, 200, 300);
            panel.add(txtArea);
            
            srollWheel();
        }
        
        private void colocarBTN(){
            btn = new JButton("Pulsa aqui");
            btn.setBounds(150, 100, 150, 40);
            panel.add(btn);
            
            saludo = new JLabel();
            saludo.setBounds(50, 200, 300, 40);
            panel.add(saludo);
            
            
            JButton btn2 = new JButton("Boton2");
            btn2.setBounds(150, 100, 150, 40);
            panel.add(btn2);
            
        //Evento de escucha
        
        //click();
        click();
        mouse();
        mouseClicks();
        }
        
        private void click(){
            ActionListener oyente = new ActionListener(){
            //aca sobreescribimos el evento ya existente
            @Override
            public void actionPerformed(ActionEvent ae) {
                saludo.setText("Hola " + inpt.getText());
            }
        };
        btn.addActionListener(oyente);
        }
        
        private void mouse(){
            //agregar oyente de raton / mouseListener
            MouseListener mouse = new MouseListener() {
                @Override
                public void mouseClicked(MouseEvent e) {
                    txtArea.append("MouseClicked\n");
                    if(e.isAltDown()){
                        txtArea.append("Alt Presionado\n");
                    }else if(e.isControlDown()){
                        txtArea.append("CTRL Presionado\n");
                    }else if(e.isShiftDown()){
                        txtArea.append("Shift Presionado\n");
                    }else if(e.isMetaDown()){
                        txtArea.append("Click Derecho Presionado\n");
                    }
                    if(e.getClickCount() == 2){
                        txtArea.append("doble click\n");
                    }
                }

                @Override
                public void mousePressed(MouseEvent e) {
                    //txtArea.append("MousePressed\n");
                }

                @Override
                public void mouseReleased(MouseEvent e) {
                    //txtArea.append("MouseReleased\n");
                }

                @Override
                public void mouseEntered(MouseEvent e) {
                    //txtArea.append("MouseEntered\n");

                }

                @Override
                public void mouseExited(MouseEvent e) {
                    //txtArea.append("MouseExited\n");
                }
            };
            btn.addMouseListener(mouse);
        }
        
        private void mouseClicks(){
            //agregar oyente de raton / mouseListener
            MouseListener mouseClick = new MouseListener() {
                @Override
                public void mouseClicked(MouseEvent e) {
                    if(e.isAltDown()){
                        txtArea.append("Alt Presionado\n");
                    }else if(e.isControlDown()){
                        txtArea.append("CTRL Presionado\n");
                    }else if(e.isShiftDown()){
                        txtArea.append("Shift Presionado\n");
                    }else if(e.isMetaDown()){
                        txtArea.append("Click Derecho Presionado\n");
                    }
                    if(e.getClickCount() == 2){
                        txtArea.append("doble click\n");
                    }
                }

                @Override
                public void mousePressed(MouseEvent e) {}

                @Override
                public void mouseReleased(MouseEvent e) {}

                @Override
                public void mouseEntered(MouseEvent e) {}

                @Override
                public void mouseExited(MouseEvent e) {}
            };
            btn.addMouseListener(mouseClick);
        }
        
        private void mouseMove(){
            MouseMotionListener oyenteMov = new MouseMotionListener() {
                @Override
                public void mouseDragged(MouseEvent e) {
                    System.out.println("Se esta arrastrando\n");
                }

                @Override
                public void mouseMoved(MouseEvent e) {
                    System.out.println("El Mouse esta moviendo\n");
                }
            };
            
            inpt.addMouseMotionListener(oyenteMov);
        }
        
        private void srollWheel(){
            MouseWheelListener scroll = new MouseWheelListener() {
                @Override
                public void mouseWheelMoved(MouseWheelEvent e) {
                    if(e.getPreciseWheelRotation() < 0){
                        txtArea.append("Se ha hecho scroll hacia arriba\n");
                    }else if (e.getPreciseWheelRotation() > 0){
                        txtArea.append("Se ha hecho scroll hacia abajo\n");
                    }
                }
            };
            
            txtArea.addMouseWheelListener(scroll);
        }
        
        private void teclado() {
            KeyListener key = new KeyListener() {
                @Override
                public void keyTyped(KeyEvent e) {
                    txtArea.append("se presiono una tecla normal\n");
                }

                @Override
                public void keyPressed(KeyEvent e) {
                    txtArea.append("se presiono la tecla " + e.getKeyChar() + "\n");
                }

                @Override
                public void keyReleased(KeyEvent e) {
                    txtArea.append("se presiono y se solto una tecla\n");
                }
            };
            
            inpt.addKeyListener(key);
        }
}