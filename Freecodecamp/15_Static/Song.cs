using System;
using System.Collections.Generic;
using System.Diagnostics.Metrics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _15_Static
{
    public class Song
    {
        public string name;
        public string artist;
        public int duration;
        public static int counter = 0;

        public Song(string Aname, string aArtist, int aDuration) {
            name = Aname;
            artist = aArtist;
            duration = aDuration;

            counter++;
        }

        public int getCounter()
        {
            return counter;
        }
    }
}
