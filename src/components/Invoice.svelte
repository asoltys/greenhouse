<script>
  export let shares;
  import { onMount } from "svelte";
  import QRCode from "qrcode";

  const copy = (v) => {
    let textArea = document.createElement("textarea");
    textArea.style.position = "fixed";
    textArea.value = v;

    document.body.appendChild(textArea);

    textArea.focus();
    textArea.select();

    document.execCommand("copy");
    document.body.removeChild(textArea);
    copied = true;
    setTimeout(() => (copied = false), 2000);
  };

  let address = "GobotPQrF4TTk3uowx9wV6eVZVktPwzvmh";

  let qrCode;

  $: url = `bitcoin:${address}`;

  $: updateQr(url);
  let updateQr = (url) => {
    QRCode.toString(
      url,
      {
        errorCorrectionLevel: "H",
        type: "svg",
        width: "250",
        height: "250",
        color: {
          dark: "#000000",
          light: "#FFFFFF",
        },
      },
      (e, s) => {
        if (e) throw e;
        qrCode = s;
      }
    );
  };

  let amount = (shares * 2100) / 100000000;
  let copied;
</script>

<div class="container column text-black">
  <div class="container mb">
    Purchasing <b>{shares}</b> shares
  </div>

  <div class="page-block">
    <div class="container">
      Please send <b>{amount} BTC</b> to:
    </div>

    <div id="payment-qr-code" class="container column">
      <div class="container">
        <a href={url} target="_blank">
          {@html qrCode}
        </a>
      </div>
      <div class="container column mb">
        <a href={url} target="_blank">
          <p
            id="payment-url"
            style="word-wrap: break-word; margin: 0 auto; line-height: 1.5em;"
            class="font-bold text-[#F7931A]"
          >
            {address}
          </p>
        </a>
      </div>
      <div class="container mb">
        <button on:click={copy} class="font-bold">
          {#if copied}
            Copied!
          {:else}
            Copy
          {/if}
        </button>
      </div>
    </div>
  </div>
</div>
