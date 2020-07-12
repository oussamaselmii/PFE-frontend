<template>
  
      <div id="invoice">
    <div class="invoice overflow-auto">
        <div class="toolbar hidden-print">
        <div class="text-right">
            <a href="" @click.prevent="printme" target="_blank" class="btn btn-danger"><i class="fa fa-print"> Print</i></a>
        </div>
        <hr>
    </div>
        <div style="min-width: 600px">
            <header>
                <div class="row">
                    <div class="col">
                        <a href="https://ciblo.net/">
                            <img src="http://localhost/PFE/back/backend/public/uploads/logos/logo3.jpg" data-holder-rendered="true" />
                        </a>
                    </div>
                    <div class="col company-details">
                        <h2 class="name">
                            <a target="_blank" href="https://ciblo.net/">
                                CIBLO
                            </a>
                        </h2>
                        <br><br><br>
                        <div><h6>Espace Tunis Montplaisir Tunis</h6></div>
                        <div><h6>(+216) 71904675</h6></div>
                        <div><h6>infos@ciblo.tn</h6></div>
                    </div>
                </div>
            </header>
            <main>
                <div class="row contacts">
                    <div class="col invoice-to">
                        <div class="text-gray-light">FACTURE À:</div>
                        <h2 class="to">{{livraison.first_name}} {{livraison.last_name}}</h2>
                        <div class="address">{{livraison.address}}</div>
                        <div class="email"><a href="">{{livraison.email}}</a></div>
                        <div class="phone">{{livraison.phone_number}}</div>
                    </div>
                    <div class="col invoice-details">
                        <h1 class="invoice-id">FACTURE</h1>
                        <div class="date">Date De Commande: {{orders.created_at}}</div>
                        
                    </div>
                </div>
                <table border="0" cellspacing="0" cellpadding="0">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th class="text-left">Nom Du Produit</th>
                        <th class="text-right">Prix Du Produit</th>
                        <th class="text-right">Quantité Du Produit</th>
                        <th class="text-right">Totale</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(detail , index) in order_details" :key="index">
                        <td class="no">{{index+1}}</td>
                        <td class="text-left"><h3>{{detail.product_name}}</h3></td>
                        <td class="unit">{{detail.product_price}} DT</td>
                        <td class="qty">{{detail.product_quantity}}</td>
                        <td class="total">{{detail.product_price * detail.product_quantity }} DT</td>
                    </tr>
                    </tbody>
                    <tfoot>
                    <tr>
                        <td colspan="2"></td>
                        <td colspan="2">Sous-Total De La Commande</td>
                        <td>{{orders.total_price}} DT</td>
                    </tr>
                    <tr>
                        <td colspan="2"></td>
                        <td colspan="2">Frais Du Livraison</td>
                        <td>0 DT</td>
                    </tr>
                    <tr>
                        <td colspan="2"></td>
                        <td colspan="2">Totale</td>
                        <td>{{orders.total_price}} DT</td>
                    </tr>
                    </tfoot>
                </table>

                <div class="thanks">MERCI!!</div>
                <div class="notices">
                    <div>Signature :</div>
                    <div class="notice"></div>
                </div>
                <br><br><br><br><br>
            </main>
            <footer>
                Copyright © CIBLO
            </footer>
        </div>
        
        <div></div>
    </div>
</div>
  
</template>

<script>
export default {
  data() {
    return {
      orders:[],
      user:[],
      livraison:[],
      order_details:[],
      
      
    };
  },
  methods: {
      printme(){
      window.print();
    },
    
    get_commande_details() {
      axios
        .get("/commande_detail/"+this.$route.params.commande_id)
        .then((response) => {
          this.order_details = response.data;
          console.log(response.data);
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        });
    },
    
    get_single_order() {
      axios
        .get("/commande/"+this.$route.params.commande_id)
        .then((response) => {
          this.orders = response.data;
          console.log(response.data);
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        });
    },
    get_single_user() {
      axios
        .get("/show/"+this.$route.params.user_id)
        .then((response) => {
          this.user = response.data;
          console.log(response.data);
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        });
    },
    get_livraison() {
      axios
        .get("/show_livraison_details/"+this.$route.params.livraison_id)
        .then((response) => {
          this.livraison = response.data;
          console.log(response.data);
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        });
    },
    
        
    
    
    
    
    order_update(){
            this.form.put("commande/"+this.form.id).then(response => {
            
                this.get_all_orders(),
                $('#order_modal').modal('hide')
                iziToast.success({
                    title: 'Success',
                    message: 'Order Update successfully',
                });
            });
              
        },
  },
  created(){
    this.get_single_order();
    this.get_single_user();
    this.get_livraison();
    this.get_commande_details();

  },
};
</script>

<style>
    #invoice{
        padding: 30px;
    }

    .invoice {
        position: relative;
        background-color: #FFF;
        min-height: 680px;
        padding: 15px
    }

    .invoice header {
        padding: 10px 0;
        margin-bottom: 20px;
        border-bottom: 1px solid #3989c6
    }

    .invoice .company-details {
        text-align: right
    }

    .invoice .company-details .name {
        margin-top: 0;
        margin-bottom: 0
    }

    .invoice .contacts {
        margin-bottom: 20px
    }

    .invoice .invoice-to {
        text-align: left
    }

    .invoice .invoice-to .to {
        margin-top: 0;
        margin-bottom: 0
    }

    .invoice .invoice-details {
        text-align: right
    }

    .invoice .invoice-details .invoice-id {
        margin-top: 0;
        color: #3989c6
    }

    .invoice main {
        padding-bottom: 50px
    }

    .invoice main .thanks {
        margin-top: -100px;
        font-size: 2em;
        margin-bottom: 50px
    }

    .invoice main .notices {
        padding-left: 6px;
        border-left: 6px solid #3989c6
    }

    .invoice main .notices .notice {
        font-size: 1.2em
    }

    .invoice table {
        width: 100%;
        border-collapse: collapse;
        border-spacing: 0;
        margin-bottom: 20px
    }

    .invoice table td,.invoice table th {
        padding: 15px;
        background: #eee;
        border-bottom: 1px solid #fff
    }

    .invoice table th {
        white-space: nowrap;
        font-weight: 400;
        font-size: 16px
    }

    .invoice table td h3 {
        margin: 0;
        font-weight: 400;
        color: #3989c6;
        font-size: 1.2em
    }

    .invoice table .qty,.invoice table .total,.invoice table .unit {
        text-align: right;
        font-size: 1.2em
    }

    .invoice table .no {
        color: #fff;
        font-size: 1.6em;
        background: #3989c6
    }

    .invoice table .unit {
        background: #ddd
    }

    .invoice table .total {
        background: #3989c6;
        color: #fff
    }

    .invoice table tbody tr:last-child td {
        border: none
    }

    .invoice table tfoot td {
        background: 0 0;
        border-bottom: none;
        white-space: nowrap;
        text-align: right;
        padding: 10px 20px;
        font-size: 1.2em;
        border-top: 1px solid #aaa
    }

    .invoice table tfoot tr:first-child td {
        border-top: none
    }

    .invoice table tfoot tr:last-child td {
        color: #3989c6;
        font-size: 1.4em;
        border-top: 1px solid #3989c6
    }

    .invoice table tfoot tr td:first-child {
        border: none
    }

    .invoice footer {
        width: 100%;
        text-align: center;
        color: #777;
        border-top: 1px solid #aaa;
        padding: 8px 0
    }

    @media print {
        .invoice {
            font-size: 11px!important;
            overflow: hidden!important
        }

        .invoice footer {
            position: absolute;
            bottom: 10px;
            page-break-after: always
        }

        .invoice>div:last-child {
            page-break-before: always
        }
    }
</style>