using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;

namespace _13_Clases
{
    public class Book__constructor
    {
        public string title;
        public string author;
        public int year;
        public Book__constructor(string atitle, string aauthor, int ayear)
        {
            title = atitle;
            author = aauthor;
            year = ayear;
        }
    }
}
