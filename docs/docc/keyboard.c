#include <stdlib.h>
#include <string.h>
#include <stdio.h>
#include <time.h>
#include <signal.h>
#include <unistd.h>
#include <sys/types.h>
#include <sys/wait.h>
#include <pthread.h>

void  ALARMhandler(int sig)
{
  signal(SIGALRM, SIG_IGN);          /* ignore this signal       */
  printf("Alarm!!\n");
  signal(SIGALRM, ALARMhandler);     /* reinstall the handler    */
}

void* thread() {
    printf("This is a thread\n");
    
    if(read(0, data, 128) < 0) {
        printf("Error");
    } else {
        printf("Not error");
    }
    return NULL;
}

int main(int argc, char* argv[]) {
    if(argc != 2) {
        printf("Argument 1: seconds");
        return 1;
    }

    signal(SIGALRM, ALARMhandler);

    int seconds = atoi(argv[1]);
    alarm(seconds);

    char data[128];

    pthread_t tid;
    pthread_create(&tid, NULL, thread, NULL);

    pause();

    printf("Test\n");
    pthread_cancel(tid);
    pthread_join(tid, NULL);
      
    return 0; 
}

