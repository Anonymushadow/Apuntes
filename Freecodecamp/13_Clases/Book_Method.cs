using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _13_Clases
{
    public class Book_Method
    {
        public string title;
        public string author;
        public int year;
        public Book_Method(string atitle, string aauthor, int ayear)
        {
            title = atitle;
            author = aauthor;
            year = ayear;
        }

        public bool estaDisponible(int disponible) {
            if(disponible == 0)
            {
                return false;
            }
            else
            {
                return true;
            }
        }
    }
}
