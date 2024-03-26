package Ventana;

import java.awt.Color;
import java.awt.Dimension;
import java.awt.Font;
import java.awt.Image;
import javax.swing.BorderFactory;
import javax.swing.ButtonGroup;
import javax.swing.DefaultComboBoxModel;
import javax.swing.DefaultListModel;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.SwingConstants;
import javax.swing.ImageIcon;
import javax.swing.JButton;
import javax.swing.JCheckBox;
import javax.swing.JComboBox;
import javax.swing.JList;
import javax.swing.JPasswordField;
import javax.swing.JRadioButton;
import javax.swing.JScrollPane;
import javax.swing.JTable;
import javax.swing.JTextArea;
import javax.swing.JTextField;
import javax.swing.JToggleButton;
import javax.swing.ScrollPaneConstants;
import javax.swing.table.DefaultTableModel;

public class Ventana extends JFrame{
        JPanel panel = new JPanel();//introducir panel
    public Ventana(){
        //todo se trabaja en pixeles
        setSize(500, 500);//Tamaño = ancho, largo
        setDefaultCloseOperation(EXIT_ON_CLOSE);//Cerrar programa al cerrar la ventana
        setTitle("Este es mi titulo ");//poner titulo a la ventana
        
        //definir donde aparece la ventana al abrir el programa
        //setLocation(100, 200);//x, y 
        //setBounds(100, 200, 500, 500);//setLocation + setSize --> x, y, width, height
        setLocationRelativeTo(null);//setLocation = centro de la pantalla
        //setResizable(false);//evitar que se modifique el tamaño de la pantalla
        setMinimumSize(new Dimension(200, 300));//tamaño minimo de la ventana 
        this.getContentPane().setBackground(Color.RED);//que la ventana tenga color rojo
        //paneles = donde se escribe o se introducen cosas
        iniciarComponentes();
    }
    
    private void iniciarComponentes(){
        colocarPaneles();
        colocarTexto();
        colocarImagenes();
        colocarBoton();
        colocarInputs();
        colocarTablas();
        colocarListas();
    }
    
    private void colocarPaneles(){
        //this = JFrame
        this.getContentPane().add(panel);
        panel.setBackground(Color.GREEN);//color de panel
    }
    
    private void colocarTexto(){
        JLabel etiqueta = new JLabel("Hola mundo");//crear etiqueta
        panel.add(etiqueta);//añadir etiqueta
        panel.setLayout(null);//eliminar diseños predeterminados
        etiqueta.setBounds(0, 0, 100, 20);//x, y, height, width
        
        JLabel etiqueta2 = new JLabel();//crear etiqueta de texto metodo 2
        etiqueta2.setText("Hola mundo 2");//introducir el texto
        etiqueta2.setForeground(Color.WHITE);//color de letra
        etiqueta2.setBounds(110, 0, 100, 20);//x, y, width, height
        etiqueta2.setOpaque(true);//establecer permisos para pintar el fondo de la etiqueta
        etiqueta2.setBackground(Color.BLACK);//color de fondo de la etiqueta
        panel.add(etiqueta2);//añadir etiqueta
        
        JLabel etiqueta3 = new JLabel("Hola mundo 3", SwingConstants.CENTER);
        etiqueta3.setForeground(Color.WHITE);
        etiqueta3.setBounds(0, 25, 100, 20);
        etiqueta3.setOpaque(true);
        etiqueta3.setBackground(Color.BLACK);
        panel.add(etiqueta3);
        
        
        //centrar metodo 2
        JLabel etiqueta4 = new JLabel();
        etiqueta4.setText("Hola mundo 4");
        etiqueta4.setHorizontalAlignment(SwingConstants.RIGHT);//ubicacion del texto en la etiqueta
        etiqueta4.setForeground(Color.WHITE);
        etiqueta4.setFont(new Font("arial", Font.BOLD, 20));//modificar la tipografia --> tipo de letra, estilo, tamaño
        etiqueta4.setBounds(110, 25, 100, 20);
        etiqueta4.setOpaque(true);
        etiqueta4.setBackground(Color.BLACK);
        panel.add(etiqueta4);
    }
    
    private void colocarImagenes(){
        //imagenes
        //metodo 1
        /*
        JLabel img = new JLabel(new ImageIcon("Javascript.png"));
        img.setBounds(10, 80, 450, 450);
        panel.add(img);
        
        //metodo 2
        ImageIcon imagen = new ImageIcon("Javascript.png");
        JLabel img2 = new JLabel(imagen);
        img2.setBounds(10, 540, 450, 450);
        panel.add(img2);
        */
        
        //metodo 3
        ImageIcon image = new ImageIcon("Javascript.png");
        JLabel img3 = new JLabel();
        img3.setBounds(0, 80, 500, 300);//primero va el tamaño del contenedor
        img3.setIcon(new ImageIcon(image.getImage().getScaledInstance(img3.getWidth(), img3.getHeight(), Image.SCALE_SMOOTH)));//ancho, alto, escalado
        panel.add(img3);
    }
    
    private void colocarBoton(){
        //sin nada
        JButton btn = new JButton();
        btn.setBounds(50, 500, 100, 40);
        panel.add(btn);
        
        //con texto 
        //metodo1
        JButton btn2 = new JButton("Click");
        btn2.setBounds(150, 500, 100, 40);
        panel.add(btn2);
        
        //metodo 2
        JButton btn3 = new JButton();
        btn3.setText("Tocame");
        btn3.setBounds(50, 600, 100, 40);
        panel.add(btn3);
        
        
        JButton btn4 = new JButton();
        btn4.setText("Touch me");
        btn4.setEnabled(false); //deshabilitamos el boton
        btn4.setBounds(150, 600, 100, 40);
        panel.add(btn4);
        
        JButton btn5 = new JButton();
        btn5.setText("Touch me");
        btn5.setMnemonic('a');//crear atajo de teclado con alt + a
        btn5.setBounds(250, 600, 100, 40);
        panel.add(btn5);
        
        JButton btn6 = new JButton();
        btn6.setText("Touch me");
        btn6.setForeground(Color.RED);
        btn6.setFont(new Font("cooper black", Font.ITALIC, 10));
        btn6.setBounds(250, 500, 100, 40);
        panel.add(btn6);
        
        //boton de imagen
        JButton btn7 = new JButton();
        btn7.setText("Touch me");
        btn7.setBackground(Color.RED);
        btn7.setBounds(350, 500, 100, 40);
        panel.add(btn7);
        
        JButton btn8 = new JButton();
        btn8.setText("Touch me");
        ImageIcon clickAqui = new ImageIcon("btn.png");
        btn8.setBounds(350, 600, 100, 40);
        btn8.setIcon(new ImageIcon(clickAqui.getImage().getScaledInstance(btn8.getWidth(), btn8.getHeight(), Image.SCALE_SMOOTH)));
        btn8.setForeground(Color.RED);
        btn8.setFont(new Font("cooper black", Font.ITALIC, 10));
        btn8.setBorder(BorderFactory.createLineBorder(Color.BLUE, 3,true));//añadir un borde> color, ancho, bordes redondeados 
        panel.add(btn8);
        
        //Radio botones
        JRadioButton radiobtn = new JRadioButton("Opcion 1", true);//nombre, esta seleccionado?
        radiobtn.setBounds(700, 100, 100, 50);
        radiobtn.setFont(new Font("cooper black", Font.ITALIC, 10));
        panel.add(radiobtn);
        
        JRadioButton radiobtn2 = new JRadioButton("Opcion 2", false);
        radiobtn2.setBounds(700, 200, 100, 50);
        radiobtn2.setEnabled(false);
        panel.add(radiobtn2);
        
        JRadioButton radiobtn3 = new JRadioButton("Opcion 3", false);
        radiobtn3.setBounds(700, 300, 100, 50);
        radiobtn3.setText("Texto cambiado");
        panel.add(radiobtn3);
        
        ButtonGroup grupo = new ButtonGroup();
        grupo.add(radiobtn);
        grupo.add(radiobtn2);
        grupo.add(radiobtn3);
        
        //botones de activacion
        JToggleButton check = new JToggleButton("Opcion 1", true);
        radiobtn3.setBounds(900, 700, 100, 50);
        panel.add(check);
        
        JToggleButton check2 = new JToggleButton("Opcion 2", false);
        radiobtn3.setBounds(900, 600, 100, 50);
        panel.add(check2);
        
        JToggleButton check3 = new JToggleButton("Opcion 3", false);
        radiobtn3.setBounds(900, 500, 100, 50);
        panel.add(check3);
        
        ButtonGroup grupo2 = new ButtonGroup();
        grupo2.add(check);        
        grupo2.add(check2);
        grupo2.add(check3);
        
        //checkbox
        JCheckBox checkbx = new JCheckBox("opcion 1");
        checkbx.setBounds(800, 80, 100, 40);
        JCheckBox checkbx2 = new JCheckBox("opcion 2");
        checkbx2.setBounds(800, 100, 100, 40);
        JCheckBox checkbx3 = new JCheckBox("opcion 3");
        checkbx3.setBounds(800, 120, 100, 40);
        panel.add(checkbx);
        panel.add(checkbx2);
        panel.add(checkbx3);
        
        //listas desplegables
        String[] paises = {"Peru", "Argentina", "Francia", "Rusia", "Australia", "EEUU"};
        JComboBox lista = new JComboBox(paises);
        lista.setBounds(900, 200, 100, 30);
        //agregar mas objetos luego de que exista esta
        lista.addItem("España");
        lista.setSelectedItem("Rusia");//cual es el primer objeto para aparecer
        panel.add(lista);
        
        Persona persona = new Persona("Alejandro", 22, "Ruso");
        DefaultComboBoxModel modelo = new DefaultComboBoxModel();
        JComboBox lista2 = new JComboBox(modelo);
        modelo.addElement(persona);//en persona sobreescribir el toString para que devuelva solo el nombre
        lista2.setBounds(900, 400, 100, 30);
        panel.add(lista2);
        
        //input password
        JPasswordField cont = new JPasswordField();
        cont.setText("44436545");
        cont.setBounds(1000, 400, 100, 30);
        System.out.println(cont.getPassword());//obtener contraseña --> te devuelve un arreglo de caracteres
        String contraseña = "";
        //tomar lo que esta dentro del input type 
        for (int i = 0; i < cont.getPassword().length; i++) {
            contraseña += cont.getPassword()[i];
        }
        System.out.println(contraseña);
        panel.add(cont);
    }
    
    //inputs
    private void colocarInputs(){
        JTextField inpt = new JTextField();
        
        inpt.setBounds(30, 50, 300, 30);
        inpt.setText("Hola");//texto inicial
        panel.add(inpt);
        System.out.println(inpt.getText());
        
        JTextArea inpt2 = new JTextArea("Hola");
        inpt2.setBounds(700, 600, 300, 200);
        inpt2.append(" Como estas?");
        inpt.setEditable(false);
        panel.add(inpt2);
        
        //barras de desplazamiento
        JScrollPane scroll = new JScrollPane(inpt2);//JScrollPane scroll = new JScrollPane(vertical, horizontal) --> shorthand
        scroll.setBounds(700, 600, 300, 200);
        scroll.setVerticalScrollBarPolicy(ScrollPaneConstants.VERTICAL_SCROLLBAR_AS_NEEDED);//poner scroll vertical en caso de ser necesario
        panel.add(scroll);
        
    }
    
    private void colocarTablas(){
        DefaultTableModel modelo = new DefaultTableModel();//guardas los objetos de a tabla
        //todo en la tabla se pone en el modelo --> como un panel en una ventana
        JTable tabla = new JTable(modelo);//crear tabla
        tabla.setBounds(500, 100, 300, 200);
        modelo.addColumn("Nombre");
        modelo.addColumn("Edad");
        modelo.addColumn("Nacionalidad");
        
        String[] persona1 = {"Pablo", "23", "Colombiano"};
        String[] persona2 = {"Rosa", "40", "Española"};
        String[] persona3 = {"Juan", "13", "Argentino"};
        
        modelo.addRow(persona1);
        modelo.addRow(persona2);
        modelo.addRow(persona3);
        panel.add(tabla);
        
        //le añadis a la tabla una barra de scroll
        JScrollPane scrl = new JScrollPane(tabla,ScrollPaneConstants.VERTICAL_SCROLLBAR_AS_NEEDED, ScrollPaneConstants.HORIZONTAL_SCROLLBAR_AS_NEEDED);
        scrl.setBounds(500, 100, 300,200);
        panel.add(scrl);
    }
    
    private void colocarListas(){
        DefaultListModel model = new DefaultListModel(); 
        model.addElement(new Persona("Alejandro", 21, "Peruano"));//le damos un objeto persona
        model.addElement(new Persona("Juana", 11, "Venezolana"));
        model.addElement(new Persona("John", 30, "Estadounidence"));
        
        JList list = new JList(model);
        list.setBounds(800, 80, 100, 300);
        panel.add(list);
        
        JScrollPane listScroll = new JScrollPane(list, ScrollPaneConstants.VERTICAL_SCROLLBAR_AS_NEEDED, ScrollPaneConstants.HORIZONTAL_SCROLLBAR_AS_NEEDED);
        listScroll.setBounds(800, 80, 100, 300);
        panel.add(listScroll);
    }   
}
