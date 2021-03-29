const panelExample = () => {
  var html = `<table class="table mb-0">
      <colgroup>
        <col class="table-cell-fit">
          <col class="table-cell-fill">
            <col class="table-cell-fit">
            </colgroup>
            <thead>
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Description</th>
                <th scope="col" class="text-nowrap">Sum kr</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="table-cell-number"><date>2016-06-16</date></td>
                <td>Phil's Burger</td>
                <td>-65,00</td>
              </tr>
              <tr>
                <td class="table-cell-number"><date>2016-06-14</date></td>
                <td>Oliver Twist</td>
                <td>-90,00</td>
              </tr>
              <tr>
                <td class="table-cell-number"><date>2016-06-13</date></td>
                <td>iTunes</td>
                <td>-29,00</td>
              </tr>
            </tbody>
          </table>`;

    var trigger = document.querySelector('.js-asyncCollapse');
    $(trigger).on('click', trigger, function() {
      setTimeout(function() {
        $('#collapsible2').html(html);
        trigger.dispatchEvent(new Event('done'));
      }, 3000);
    });
}

export {panelExample}