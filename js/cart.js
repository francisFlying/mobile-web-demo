window.onload=function(){
  //��� ɾ������

  //Ͱ�Ǵ򿪣�ģ̬�򵯳�
  var dels=document.querySelectorAll('.del');

  var win=document.querySelector('.modal-win');
  //ɾ���ĺ���
  var delBox=document.querySelector('.modal-del');

  //ȡ����ť
  var cancelBtn=document.querySelector('.btn-cancel');

  for(var i=0;i<dels.length;i++){
    dels[i].onclick=function(){
      this.classList.add('open');
      win.style.display='block';
      delBox.classList.add('animated');
      delBox.classList.add('bounceInDown');
    }
  }

  //���ȡ�� ���� ģ̬�� �ر� Ͱ
  cancelBtn.onclick=function(){
    win.style.display='none';
    //�ҵ���ǰ���򿪵��Ǹ�Ͱ ��ɾ��open����
    document.querySelector('.open').classList.remove('open');
  }
}